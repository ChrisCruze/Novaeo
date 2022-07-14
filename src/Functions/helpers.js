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
