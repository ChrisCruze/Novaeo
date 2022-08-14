import React, { Fragment, useEffect, useState, useMemo } from "react";

import {
	BnbDashboardPage,
	BnbSurveyPage,
	BnbHomePage,
	IconFromName,
} from "../SoftElements";

import { DynamicConfigPage } from "../SoftElements";

import {
	NovaeoPage,
	DataPortal,
	routesDefine,
	DefaultDashboard,
} from "../SoftComponents";
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

function configGenerate() {
	return {
		title: "Bnb Dashboard",
		subTitle: "Provides Guests with Insights",
		routes: routesDefine(),
		showNav: true,
		showHeaderNav: false,
	};
}
const Dashboard = () => {
	const config = configGenerate();
	return <DefaultDashboard {...config} />;
};
export default Dashboard;
