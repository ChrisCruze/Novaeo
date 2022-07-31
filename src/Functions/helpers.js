import _ from "lodash";

function string_params_pull_split(s) {
	var a = s.split("&");
	if (a == "") return {};
	var b = {};
	for (var i = 0; i < a.length; ++i) {
		var p = a[i].split("=", 2);
		if (p.length == 1) b[p[0]] = "";
		else b[p[0]] = decodeURIComponent(p[1].replace(/\+/g, " "));
	}
	return b;
}

function queryDictFromURLParamsBase() {
	query_params = window.location.href.split("?")[1];
	var lookupDict = string_params_pull_split(query_params);
	return lookupDict;
}

function queryDictFromURLParams() {
	try {
		return queryDictFromURLParamsBase();
	} catch (err) {
		return {};
	}
}

export const productMap = ({ mappingArray, partsArray, productsArray }) => {
	const productsArrayMapping = _.map(productsArray, (D) => {
		const mappingArrayFiltered =
			_.filter(mappingArray, (mappingDict) => {
				return mappingDict["isku"] == D["isku"];
			}) || {};
		const parts = _.map(mappingArrayFiltered, (mappingDict) => {
			const partDict =
				_.find(partsArray, (partDict) => {
					return partDict["part_id"] == mappingDict["part_id"];
				}) || {};
			return { ...mappingDict, ...partDict };
		});
		const partsCount = parts.length;
		const part_id = _.map(parts, (partsDict) => partsDict["part_id"]).join(
			","
		);
		const newDict = {
			...D,
			part_id,
			mappingArray: mappingArrayFiltered,
			parts,
			partsCount,
		};
		return newDict;
	});
	console.log({ partsArray, productsArrayMapping });
	return productsArrayMapping;
};

export const productsDataProcess = ({ workbook }) => {
	const checkKey = (key_name) => {
		const keys_return = Object.keys(workbook || {});
		const checkKeysBool = keys_return.indexOf(key_name) > -1;
		return checkKeysBool;
	};

	if (checkKey("Mapping") && checkKey("Parts") && checkKey("Products")) {
		const mappingArray = workbook["Mapping"];
		const partsArray = workbook["Parts"];
		const productsArray = workbook["Products"];
		return productMap({ mappingArray, partsArray, productsArray });
	} else {
		return [];
	}
};

export const partsMap = ({ mappingArray, partsArray, productsArray }) => {
	const partsArrayMapping = _.map(partsArray, (partsDict) => {
		const mappingArrayFiltered =
			_.filter(mappingArray, (mappingDict) => {
				return mappingDict["part_id"] == partsDict["part_id"];
			}) || {};
		const products = _.map(mappingArrayFiltered, (mappingDict) => {
			const productDict =
				_.find(productsArray, (D) => {
					return D["isku"] == mappingDict["isku"];
				}) || {};
			return { ...mappingDict, ...productDict };
		});
		const productsCount = products.length;
		const isku = _.map(products, (productDict) => productDict["isku"]).join(
			","
		);
		const newDict = {
			...partsDict,
			isku,
			mappingArray: mappingArrayFiltered,
			products,
			productsCount,
		};
		return newDict;
	});
	return partsArrayMapping;
};
export const partsDataProcess = ({ workbook }) => {
	const checkKey = (key_name) => {
		const keys_return = Object.keys(workbook || {});
		const checkKeysBool = keys_return.indexOf(key_name) > -1;
		return checkKeysBool;
	};

	if (checkKey("Mapping") && checkKey("Parts") && checkKey("Products")) {
		const mappingArray = workbook["Mapping"];
		const partsArray = workbook["Parts"];
		const productsArray = workbook["Products"];
		return partsMap({ mappingArray, partsArray, productsArray });
	} else {
		return [];
	}
};
