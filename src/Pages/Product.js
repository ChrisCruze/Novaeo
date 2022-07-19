import React, { Fragment, useEffect, useState, useMemo } from "react";
import { Link, useNavigate, useHistory } from "react-router-dom";
import { auth, signInWithGoogle, database } from "../firebase";
import { ref, set, onValue, get } from "firebase/database";
import { useAuthState } from "react-firebase-hooks/auth";
import {
	BnbDashboardPage,
	BnbSurveyPage,
	BnbHomePage,
	IconFromName,
} from "../SoftElements";

import { DynamicConfigPage } from "../SoftElements";

import { NovaeoPage, DataPortal, routesDefine } from "../SoftComponents";
import {
	readSheetValues,
	updateSheetValues,
	updateSheetValuesRequestsCreate,
	useSheets,
	useWorkbook,
	useWorkbook2,
} from "../Functions/useSheets";
import {
	productMap,
	productsDataProcess,
	partsDataProcess,
} from "../Functions/helpers";
import _ from "lodash";

const fieldsFromDictionary = ({ workbook }) => {
	const checkKey = (key_name) => Object.keys(workbook).indexOf(key_name) > -1;

	if (workbook["loaded"] && checkKey("Dictionary")) {
		const dictionary_array = workbook["Dictionary"];
		const dictionary_array_filtered = dictionary_array.filter((D) => {
			return D["worksheet"] == "Products";
		});
		const dictionary_array_filtered2 = dictionary_array_filtered.filter(
			(D) => {
				return D["form_input"] == "TRUE";
			}
		);
		const tableColumns = _.map(dictionary_array_filtered2, (D) => ({
			id: D["field"],
			type: D["type"] || "text",
			label: D["name"],
			gridItem: { sm: parseInt(D["form_field_width"]) || 6 },
		}));

		return tableColumns;
	} else {
		return [];
	}
};

const columnsFromDictionaryParts = ({ workbook }) => {
	const checkKey = (key_name) => Object.keys(workbook).indexOf(key_name) > -1;

	if (workbook["loaded"] && checkKey("Dictionary")) {
		const dictionary_array = workbook["Dictionary"];
		const dictionary_array_filtered = dictionary_array.filter((D) => {
			return D["worksheet"] == "Parts";
		});
		const tableColumns = _.map(dictionary_array_filtered, (D) => ({
			data: D["field"],
			title: D["name"],
			visible: D["visible"] == "TRUE",
		}));
		const tableColumnsLinks = _.map(tableColumns, (D) => {
			if (D["data"] == "part_id") {
				return {
					...D,
					render: function (data, type, row, meta) {
						const url = `/#/Part?part_id=${data}`;
						const text = data;
						return `<a target='blank' href='${url}'>${text}</a>`;
					},
				};
			} else {
				return D;
			}
		});
		return tableColumnsLinks;
	} else {
		return [];
	}
};
const productDictFromURLUpdate = ({ tableData, pageData, setPageData }) => {
	const queryDict = queryDictFromURLParams();
	const tableFiltered = arrayDictMatchLookUp(tableData, queryDict);
	const tableDict = tableFiltered[0] || {};
	const isReady = () => {
		return Object.keys(tableDict).length > 0;
	};
	useEffect(() => {
		const pageDataUpdated = { ...pageData, ...tableDict };
		setPageData(pageDataUpdated);
	}, [isReady()]);
	return tableDict;
};
const DataPortalConfig = () => {
	const [pageData, setPageData] = useState({});
	const sheet_names = ["Parts", "Products", "Mapping", "Dictionary"];
	const access_key = "AIzaSyBbV-veLJYxgpNWWGDEdIF7eHjFTTtrSCU";
	const sheet_id = "11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs";
	const workbook = useWorkbook2({
		sheet_names,
		access_key,
		sheet_id,
	});
	const tableData = productsDataProcess({ workbook });
	const fieldsArray = fieldsFromDictionary({ workbook });
	productDictFromURLUpdate({ tableData, pageData, setPageData });
	const partsTableData = partsDataProcess({ workbook });
	const partsTableDataFiltered = partsTableData.filter((D) => {
		return D["isku"].indexOf(queryDictFromURLParams()["isku"]);
	});
	console.log({
		partsTableData,
		partsTableDataFiltered,
		workbook,
		tableData,
		fieldsArray,
		pageData,
	});
	return {
		sectionsArray: [
			{
				href: "general",
				label: "General",
				icon: "1",
				form: {
					title: pageData["isku"] || "",
					array: fieldsArray,
				},
			},
			{
				href: "table",
				label: "Table",
				icon: "2",
				datatables: {
					datatableLoad: workbook.loaded,
					config: {
						id: "dataTableNode",
						dom: '<"html5buttons"B>lTfgitp',
						data: partsTableDataFiltered,
						columns: columnsFromDictionaryParts({ workbook }),
						select: true,
						paging: false,
						scrollX: true,
						colReorder: true,
						autoWidth: true,
						buttons: [
							{
								extend: "excel",
								title: document.title,
							},
							{
								extend: "colvis",
								title: document.title,
							},
							{
								text: "Clear",
								name: "Clear",
								action: function (e, dt, node, config) {
									dt.columns("").search("").draw();
									$.fn.dataTable.ext.search = [];
									dt.draw();
								},
							},
						],
					},
				},

				// form: {
				// 	title: pageData["isku"] || "",
				// 	array: fieldsArray,
				// },
			},
		],
		pageData,
		setPageData,
		showSideTabs: false,
		datatableLoad: workbook.loaded,
		title: "Product",
		showTabs: false,
		subTitle: "",
		showNav: true,
		routes: routesDefine(),
	};
};
const Home = () => {
	const [user, loading, error] = useAuthState(auth);
	const [userDict, setUserDict] = useState({ uid: "NULL" });

	let history = useHistory();
	useEffect(() => {
		if (loading) {
			return;
		}
		if (user == null) {
			// history.push("/Login");
		} else {
			console.log({ user });
			setUserDict(user);
		}
	}, [user, loading]);
	const config = DataPortalConfig();
	console.log({ config });
	return <DynamicConfigPage {...config} />;
};
export default Home;
