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

export const navigationDefine = () => {
	const routes = [
		{ type: "title", title: "Apps", key: "title-docs" },
		{ type: "divider", key: "divider-1" },

		// {
		// 	type: "collapse",
		// 	name: "Home",
		// 	key: "home",
		// 	href: location.href.split("#")[0] + "#/Home",
		// 	// icon: <IconFromName name={"3"} />,
		// 	icon: "inventory",
		// 	noCollapse: true,
		// },
		{
			type: "collapse",
			name: "Finished Goods",
			key: "products",
			href: location.href.split("#")[0] + "#/Products",
			// icon: <IconFromName name={"3"} />,
			icon: "inventory",
			noCollapse: true,
		},
		// {
		// 	type: "collapse",
		// 	name: "Products",
		// 	key: "products",
		// 	icon: <IconFromName name={"spaceship"} />,
		// 	collapse: [
		// 		{
		// 			type: "collapse",
		// 			name: "Dashboard",
		// 			key: "products",
		// 			href: "/#/Products",
		// 			icon: <IconFromName name={"creditcard"} />,
		// 			noCollapse: true,
		// 		},
		// 		// {
		// 		// 	type: "collapse",
		// 		// 	name: "Product",
		// 		// 	key: "product",
		// 		// 	href: "/#/Product",
		// 		// 	icon: <IconFromName name={"creditcard"} />,
		// 		// 	noCollapse: true,
		// 		// },
		// 	],
		// },
		{
			type: "collapse",
			name: "Parts",
			key: "parts",
			icon: "category",
			collapse: [
				{
					type: "collapse",
					name: "Dashboard",
					key: "parts_list",
					href: location.href.split("#")[0] + "#/Parts",

					icon: "creditcard",
					noCollapse: true,
				},
				{
					type: "collapse",
					name: "Create",
					key: "part_form",
					href: location.href.split("#")[0] + "#/PartForm",
					icon: "creditcard",
					noCollapse: true,
				},
			],
		},
		{ type: "title", title: "In Development", key: "title-docs" },
		{ type: "divider", key: "divider-2" },
		{
			type: "collapse",
			name: "Procurement",
			key: "procurement",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "2",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Manufacturing",
			key: "manufacturing",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "cube",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Fulfillment",
			key: "fulfillment",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "inbox",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Sales",
			key: "sales",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "money",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Reports",
			key: "reports",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "menu",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "Phoenix Sheet",
			key: "storage",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "creditcard",
			noCollapse: true,
		},
		{
			type: "collapse",
			name: "User Management",
			key: "customersupport",
			href: location.href.split("#")[0] + "#/Home",
			// icon: <IconFromName name={"3"} />,
			icon: "inventory",
			noCollapse: true,
		},

		{ type: "title", title: "Docs", key: "title-docs" },
		{ type: "divider", key: "divider-3" },
		{
			type: "collapse",
			name: "Reference",
			key: "reference",
			icon: "spaceship",
			collapse: [
				{
					type: "collapse",
					name: "Google SpreadSheet",
					key: "gspread",
					href: "https://docs.google.com/spreadsheets/d/11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs/edit#gid=1611145097",
					icon: "creditcard",
					noCollapse: true,
				},

				{
					type: "collapse",
					name: "Home",
					key: "home",
					href: "https://chriscruze.github.io/Novaeo/index.html#",
					icon: "creditcard",
					noCollapse: true,
				},
			],
		},
	];
	return {
		routes,
		brand: "https://raw.githubusercontent.com/ChrisCruze/Novaeo/main/src/assets/images/novaeo.jpeg",
		brandName: "Novaeo",
	};
};
