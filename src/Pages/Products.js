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

import { NovaeoPage, DataPortal, routesDefine } from "../SoftComponents";
import {
	readSheetValues,
	updateSheetValues,
	updateSheetValuesRequestsCreate,
	useSheets,
	useWorkbook,
	fetchSheets,
	useWorkbook2,
} from "../Functions/useSheets";
import { productMap } from "../Functions/helpers";
import _ from "lodash";

const productsDataProcess2 = ({ workbook }) => {
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

const columnsFromDictionary = ({ workbook }) => {
	const checkKey = (key_name) => Object.keys(workbook).indexOf(key_name) > -1;
	if (workbook["loaded"] && checkKey("Dictionary")) {
		const dictionary_array = workbook["Dictionary"];
		const dictionary_array_filtered = dictionary_array.filter((D) => {
			return D["worksheet"] == "Products";
		});
		const tableColumns = _.map(dictionary_array_filtered, (D) => ({
			data: D["field"],
			title: D["name"],
			visible: D["visible"] == "TRUE",
		}));
		const tableColumnsLinks = _.map(tableColumns, (D) => {
			if (D["data"] == "isku") {
				return {
					...D,
					render: function (data, type, row, meta) {
						const url =
							location.href.split("#")[0] +
							`#/Product?isku=${data}`;
						const text = data;
						return `<a  href='${url}'>${text}</a>`;
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

const metricsGenerate = ({ data, setFilterDict }) => {
	const metrics = [
		{ title: "Products", metric: data.length, icon: "inventory" },
		{
			title: "Parts",
			metric: arraySum(data, "partsCount"),
			icon: "category",
		},
		{ title: "Stock Outs", metric: "-", icon: "inbox" },
		{
			title: "Costs",
			metric: arraySum(data, "total_unit_cost"),
			icon: "money",
		},
	];
	return metrics;
};

const chartsGenerate = ({ workbook }) => {
	const checkKey = (key_name) =>
		Object.keys(workbook || {}).indexOf(key_name) > -1;

	if (checkKey("Dictionary")) {
		const dictionary_array = workbook["Dictionary"];
		const dictionary_array_filtered = dictionary_array.filter((D) => {
			return D["worksheet"] == "Products" && D["chart"];
		});
		const dictionary_array_filtered_four = dictionary_array_filtered.slice(
			0,
			4
		);
		const charts = _.map(dictionary_array_filtered_four, (D) => {
			return {
				type: D["chart"],
				options: [
					{
						field: D["field"],
						label: D["name"],
					},
				],
			};
		});
		console.log({ charts });
		return charts;
	} else {
		return [];
	}
};

const DataPortalConfig = () => {
	const sheet_names = ["Parts", "Products", "Mapping", "Dictionary"];
	const access_key = "AIzaSyBbV-veLJYxgpNWWGDEdIF7eHjFTTtrSCU";
	const sheet_id = "11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs";
	const workbook = useWorkbook2({
		sheet_names,
		access_key,
		sheet_id,
	});

	const tableData = productsDataProcess2({ workbook });
	console.log({ workbook, tableData });
	return {
		charts: chartsGenerate({ workbook }),
		datatableLoad: workbook.loaded,
		title: "Products",
		showTabs: false,
		subTitle: "",
		showNav: true,
		routes: routesDefine(),
		data: tableData,
		tabsFunc: ({ setFilterDict }) => {
			return [
				{
					title: "Parts",
					icon: "settings",
					func: () => {
						// setFilterDict({ backlog_category: "Backlog" });
					},
				},
				// {
				// 	title: "Sprint",
				// 	icon: "settings",
				// 	func: () => {
				// 		// setFilterDict({ backlog_category: "Sprint" });
				// 	},
				// },
				// {
				// 	title: "Accomplished",
				// 	icon: "settings",
				// 	func: () => {
				// 		// setFilterDict({ done_category: "Last 30 Days" });
				// 	},
				// },
				// {
				// 	title: "All",
				// 	icon: "settings",
				// 	func: () => {
				// 		console.log("click backlog");
				// 		// setFilterDict({});
				// 	},
				// },
			];
		},
		metricsFunc: ({ data, setFilterDict }) => {
			return metricsGenerate({ data, setFilterDict });
		},
		status: null, //{},

		tableDict: {
			id: "table",
			dom: '<"html5buttons"B>lTfgitp',
			data: tableData,
			columns: columnsFromDictionary({ workbook }),
			// columns: [
			// 	{
			// 		data: "part_id",
			// 		title: "Part ID",
			// 		visible: true,
			// 	},
			// 	{
			// 		data: "component_type",
			// 		title: "Component Type",
			// 		visible: true,
			// 	},
			// 	{
			// 		data: "phx_class",
			// 		title: "PHX Class",
			// 		visible: true,
			// 	},
			// 	{
			// 		data: "address",
			// 		title: "Address",
			// 		visible: true,
			// 	},
			// ],
			showNav: false,
			select: true,
			paging: false,
			scrollX: true,
			buttons: [
				// {
				// 	extend: "excel",
				// 	title: document.title,
				// },
				{
					extend: "colvis",
					title: document.title,
				},
				// // {
				// //   extend: "create",
				// //   editor: editor,
				// //   text: "Create",
				// // },
				// // {
				// //   extend: "remove",
				// //   editor: editor,
				// // },
				// // {
				// //   extend: "edit",
				// //   editor: editor,
				// // },
				// {
				// 	text: "Clear",
				// 	name: "Clear",
				// 	action: function (e, dt, node, config) {
				// 		dt.columns("").search("").draw();
				// 		$.fn.dataTable.ext.search = [];
				// 		dt.draw();
				// 	},
				// },
			],
		},
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
	return <DataPortal {...config} />;
};
export default Home;
