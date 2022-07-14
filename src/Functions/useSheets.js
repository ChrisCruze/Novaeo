import React, { Fragment, useEffect, useState, useMemo } from "react";

import axios from "axios";

export const updateSheetValuesRequestsCreate = ({ values, rowIndex }) => {
	const valuesArray = _.map(values, (value) => {
		return {
			userEnteredValue: {
				stringValue: value,
			},
		};
	});
	return {
		requests: [
			{
				updateCells: {
					rows: [
						{
							values: valuesArray,
						},
					],
					start: {
						sheetId: 0,
						columnIndex: 0,
						rowIndex: rowIndex,
					},
					fields: "*",
				},
			},
		],
	};
};

export const updateSheetValues = ({
	sheet_id,
	access_token,
	values,
	rowIndex,
}) => {
	const requests = updateSheetValuesRequestsCreate({ values, rowIndex });
	return fetch(
		`https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}:batchUpdate`,
		{
			method: "POST",
			headers: {
				"Content-Type": "application/json",
				//update this token with yours.
				Authorization: `Bearer ${access_token}`,
			},
			body: JSON.stringify(requests),
		}
	);
};
export const readSheetValues = ({
	sheet_name,
	access_key,
	sheets,
	setSheets,
}) => {
	const url = `https://sheets.googleapis.com/v4/spreadsheets/11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs/values/${sheet_name}?key=${access_key}`;
	return axios.get(url).then((response) => {
		setSheets({ ...sheets, response, data: response.data });
	});
};

const valuesFromPageDataSheets = ({ pageData, data }) => {
	const headers = data[0];
	const headerValues = _.map(headers, (header) => {
		if (Object.keys(pageData).indexOf(header) > -1) {
			return extractHTMLContent(pageData[header]);
		} else {
			return "";
		}
	});
	return headerValues;
};

export const useSheets = ({
	sheet_name,
	sheet_id,
	access_key,
	access_token,
}) => {
	const [sheets, setSheets] = useState({ response: {}, data: [] });
	const refresh = () => {
		readSheetValues({ sheet_name, access_key, sheets, setSheets });
	};
	useEffect(() => {
		refresh();
	}, []);
	const updateSheet = ({ pageData }) => {
		const data_list = sheets.response.data.values;
		const values = valuesFromPageDataSheets({ pageData, data: data_list }); //["10", "20"];
		const rowIndex = data_list.length;
		updateSheetValues({ sheet_id, access_token, values, rowIndex });
		refresh();
	};
	return { ...sheets, updateSheet };
};

export const useWorkbook = ({
	sheet_names,
	sheet_id,
	access_key,
	access_token,
}) => {
	const [sheets, setSheets] = useState({ loaded: false });
	const refresh = () => {
		var D = {};
		var responses = [];
		sheet_names.forEach((sheet_name) => {
			const url = `https://sheets.googleapis.com/v4/spreadsheets/${sheet_id}/values/${sheet_name}?key=${access_key}`;
			return axios.get(url).then((response) => {
				const array = arrayFromList(response.data.values);
				const responseUpdated = { ...response, array };
				responses.push(responseUpdated);
				D[sheet_name] = responseUpdated;
			});
		});
		const loaded = true;
		const setSheetDict = { ...sheets, responses, sheets: D, loaded };

		setSheets(setSheetDict);
	};
	useEffect(() => {
		refresh();
	}, []);
	return { ...sheets, refresh };
};

export const useParts = ({
	// sheet_names,
	sheet_id,
	access_key,
	access_token,
}) => {
	const sheet_names = ["Parts", "Products", "Mapping"];
	const workbook = useWorkbook({
		sheet_names,
		access_key,
		sheet_id,
	});
};
