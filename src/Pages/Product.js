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
import { productMap, productsDataProcess } from "../Functions/helpers";
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
	console.log({ workbook, tableData, fieldsArray });
	return {
		sectionsArray: [
			{
				href: "general",
				label: "General",
				icon: "1",
				form: {
					array: fieldsArray,
				},
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
