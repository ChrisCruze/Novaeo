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
} from "../Functions/useSheets";

const partsDataProcess = ({ workbook }) => {
	const checkKey = (key_name) =>
		Object.keys(workbook["sheets"] || {}).indexOf(key_name) > -1;
	if (checkKey("Mapping") && checkKey("Parts") && checkKey("Products")) {
		const mapping_array = workbook["sheets"]["Mapping"]["array"];
		const parts_array = workbook["sheets"]["Parts"]["array"];
		const products_array = workbook["sheets"]["Products"]["array"];
		return parts_array;
	}
};
const DataPortalConfig = () => {
	const sheet_names = ["Parts", "Products", "Mapping"];
	const access_key = "AIzaSyBbV-veLJYxgpNWWGDEdIF7eHjFTTtrSCU";
	const sheet_id = "11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs";

	const workbook = useWorkbook({
		sheet_names,
		access_key,
		sheet_id,
	});
	const partsArray = partsDataProcess({ workbook });
	console.log({ workbook, partsArray });
	return {
		title: "Parts",
		showTabs: false,

		subTitle: "",
		showNav: true,
		routes: routesDefine(),
		data: partsArray,
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
			return []; //{ title: "Stories", metric: 100 }
		},
		status: null, //{},
		metrics: [], //{ title: "Stories", metric: 100 }
		charts: [
			// {
			// 	type: "pie",
			// 	options: [
			// 		{
			// 			field: "priority_category",
			// 			label: "Priority",
			// 		},
			// 	],
			// },
			// {
			// 	type: "horizontal-bar",
			// 	options: [
			// 		{
			// 			field: "priority_category",
			// 			label: "Priority",
			// 		},
			// 	],
			// },
			// {
			// 	type: "horizontal-bar-stacked",
			// 	options: [
			// 		{
			// 			field: "priority_category",
			// 			label: "Priority",
			// 		},
			// 	],
			// },
			// {
			// 	type: "bar",
			// 	options: [
			// 		{
			// 			field: "priority_category",
			// 			label: "Priority",
			// 		},
			// 	],
			// },
		],
		tableDict: {
			id: "table",
			dom: '<"html5buttons"B>lTfgitp',
			data: partsArray,
			columns: [
				{
					data: "part_id",
					title: "Part ID",
					visible: true,
				},
				{
					data: "component_type",
					title: "Component Type",
					visible: true,
				},
				{
					data: "phx_class",
					title: "PHX Class",
					visible: true,
				},
				{
					data: "address",
					title: "Address",
					visible: true,
				},
			],
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
	const [reservationData, setReservationData] = useState([]);

	let history = useHistory();
	useEffect(() => {
		if (loading) {
			return;
		}
		if (user == null) {
			history.push("/Login");
		} else {
			console.log({ user });
			setUserDict(user);
		}
	}, [user, loading]);
	const config = DataPortalConfig();
	return <DataPortal {...config} />;
};
export default Home;
