import _ from "lodash";

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
		const newDict = {
			...D,
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
		console.log({ key_name, keys_return, checkKeysBool, workbook });
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
