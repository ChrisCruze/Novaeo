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

import { NovaeoPage } from "../SoftComponents";
import {
	readSheetValues,
	updateSheetValues,
	updateSheetValuesRequestsCreate,
	useSheets,
} from "../Functions/useSheets";

const partFormSectionGenerate = () => {
	const sectionsArray = [
		{
			href: "detail",
			label: "Parts Details",
			icon: "1",
			questionsArray: [
				{
					id: "part_id",
					text: "Part ID",
					description: "Enter Part ID",
					type: "text-area",
				},
				{
					id: "component_type",
					text: "Component Type",
					description: "Select Component Type",
					value: "Component A, Component B",
					isMulti: true,
					type: "multi-select",
				},

				// {
				// 	category: "config_tenant_questions",
				// 	order: "5",
				// 	section: "about",
				// 	id: "migration_confirm",
				// 	text: "Cloud Migration Journey",
				// 	description:
				// 		"By selecting yes, you have officially begun your cloud migration journey",
				// 	value: "Yes, No",
				// 	isMulti: false,
				// 	type: "multi-select",
				// 	help_text: null,
				// 	example: null,
				// },
			],
		},
		{
			href: "lead_time_settings",
			label: "Lead Time Settings",
			icon: "2",
			questionsArray: [
				{
					id: "supplier_manufacturing_lead_time",
					text: "Supplier Manufacturing Lead Time",
					description: "Enter MFG LT",
					type: "text-area",
				},
				{
					id: "shipping_lead_time",
					text: "Shipping Lead Time",
					description: "Enter Shipping Lea dTime",
					type: "text-area",
				},
				{
					id: "po_issue_days",
					text: "PO Issue Days",
					description: "Enter Days",
					type: "text-area",
				},
			],
		},
		{
			href: "safety_day_settings",
			label: "Safety Day Settings",
			icon: "3",
			questionsArray: [
				{
					id: "amazon_safety_days",
					text: "Amazon Safety Days",
					description: "Enter Amazon Safety Days",
					type: "text-area",
				},
				{
					id: "warehouse_safety_days",
					text: "Warehouse Safety Days",
					description: "Enter WH Safety Days",
					type: "text-area",
				},
			],
		},

		{
			href: "cost",
			label: "Cost",
			icon: "3",
			questionsArray: [
				{
					id: "material_unit_cost",
					text: "Material Unit Cost",
					description: "Enter Cost",
					type: "text-area",
				},
				{
					id: "shipping_cost",
					text: "Shipping Cost",
					description: "Enter Shipping Cost",
					type: "text-area",
				},
				{
					id: "landed_cost",
					text: "Landed Cost",
					description: "Enter Landed Cost",
					type: "text-area",
				},
				{
					id: "moq",
					text: "MOQ",
					description: "Enter MOQ",
					type: "text-area",
				},
				{
					id: "ordering_uom",
					text: "Ordering UOM",
					description: "Enter UOM",
					type: "text-area",
				},
			],
		},
		{
			href: "supplier_details",
			label: "Supplier Details",
			icon: "3",
			questionsArray: [
				{
					id: "supplier",
					text: "Supplier",
					description: "Select Supplier",
					value: "Supplier A, Supplier B",
					isMulti: true,
					type: "multi-select",
				},
				{
					id: "address",
					text: "Address",
					description: "Enter Address",
					type: "text-area",
				},
				{
					id: "email",
					text: "Email",
					description: "Select Email",
					type: "text-area",
				},
				{
					id: "contact_number",
					text: "Contact Number",
					description: "Enter Contact Number",
					type: "text-area",
				},
				{
					id: "supplier_payment_terms",
					text: "Supplier Payment Terms",
					description: "Select Supplier Payment Terms",
					type: "text-area",
				},
				{
					id: "product_link",
					text: "Product Link",
					description: "Enter Product Link",
					type: "text-area",
				},
			],
		},
		// {
		// 	href: "general",
		// 	label: "General",
		// 	icon: "1",
		// 	tableConfig: {
		// 		node: "rows",
		// 		columns: [{ Header: "name", accessor: "name", width: "20%" }],
		// 	},
		// 	questionsArray: [
		// {
		// 	category: "config_tenant_questions",
		// 	order: "5",
		// 	section: "about",
		// 	id: "migration_confirm",
		// 	text: "Cloud Migration Journey",
		// 	description:
		// 		"By selecting yes, you have officially begun your cloud migration journey",
		// 	value: "Yes, No",
		// 	isMulti: false,
		// 	type: "multi-select",
		// 	help_text: null,
		// 	example: null,
		// },
		// 	],
		// },
	];
	return sectionsArray;
};

const PartFormConfig = () => {
	const [pageData, setPageData] = useState({});
	const sheet_name = "Parts";
	const access_key = "AIzaSyBbV-veLJYxgpNWWGDEdIF7eHjFTTtrSCU";
	const sheet_id = "11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs";
	const access_token =
		"ya29.A0AVA9y1s9qP6_jv7j4vbMHMRkl_TonD8QiTVm3IxygOB5CLiDdvHreVwcYZC5vU2zHemOBpuC0kDDeSW4akg06sF1jTyEzkeG1emU37If0kCqF4qHGjgBd5bVBPG19Tn_ii8dOYXGAXdQkN0io5xWG3j5HyPwYUNnWUtBVEFTQVRBU0ZRRTY1ZHI4UXhzV1ZJOGR2NkRmWUdVUjl6cWdMQQ0163";

	const sheets = useSheets({
		sheet_name,
		access_key,
		access_token,
		sheet_id,
	});
	console.log({ sheets });
	const questionsSave = () => {
		console.log({ pageData });
		sheets.updateSheet({ pageData });
	};
	const sectionsArray = partFormSectionGenerate();
	return { pageData, setPageData, questionsSave, sectionsArray };
};

const PartForm = () => {
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
	const config = PartFormConfig();
	return <NovaeoPage {...config} />;
};
export default PartForm;
