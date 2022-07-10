import React, {
	Fragment,
	useEffect,
	useState,
	useMemo,
	useRef,
	useCallback,
} from "react";
import { forwardRef, createContext, useContext } from "react";

// @mui material components
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Icon from "@mui/material/Icon";
import Divider from "@mui/material/Divider";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip"; //required for info card
import Avatar from "@mui/material/Avatar"; //required for events card
import Link from "@mui/material/Link";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import Switch from "@mui/material/Switch";
import AppBar from "@mui/material/AppBar";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import InputBase from "@mui/material/InputBase";
import Select from "react-select";
import CardContent from "@mui/material/CardContent";
import TableContainer from "@mui/material/TableContainer";
import Table from "@mui/material/Table";
import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import Collapse from "@mui/material/Collapse";
import ListItem from "@mui/material/ListItem";
import ListItemText from "@mui/material/ListItemText";
import List from "@mui/material/List";
import Snackbar from "@mui/material/Snackbar";
import Badge from "@mui/material/Badge";

//icons

import Stepper from "@mui/material/Stepper";
import Step from "@mui/material/Step";
import StepLabel from "@mui/material/StepLabel";

import Toolbar from "@mui/material/Toolbar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Fade from "@mui/material/Fade";

// Images
import mercedesEQC from "assets/images/mercedes-eqc.png";
import wavesWhite from "assets/images/shapes/waves-white.svg";
//import backgroundImage from "assets/images/curved-images/white-curved.jpeg";
import backgroundImage from "assets/images/mercedes-eqc.png";

//Suibox
import Box from "@mui/material/Box";
import { styled } from "@mui/material/styles";
import { ThemeProvider } from "@mui/material/styles";
import Typography from "@mui/material/Typography";

import theme from "assets/theme";
import themeRTL from "assets/theme/theme-rtl";

import CloseIcon from "@mui/icons-material/Close";
// react-table components
import {
	useTable,
	usePagination,
	useGlobalFilter,
	useAsyncDebounce,
	useSortBy,
} from "react-table";
import ReactMarkdown from "react-markdown";

//required for profile info card
// import { Link } from "react-router-dom";
// import { Route, Redirect, useLocation } from "react-router-dom";
import { useLocation, NavLink } from "react-router-dom";

import CssBaseline from "@mui/material/CssBaseline";

import typography from "./assets/theme/base/typography";
import breakpoints from "./assets/theme/base/breakpoints";

//used for teams card
import logoSlack from "assets/images/small-logos/logo-slack.svg";

// Soft UI Dashboard PRO React base styles
import colors from "assets/theme/base/colors";
import borders from "assets/theme/base/borders";
import boxShadows from "assets/theme/base/boxShadows";

// Soft UI Dashboard PRO React helper functions
import pxToRem from "assets/theme/functions/pxToRem";
import boxShadow from "assets/theme/functions/boxShadow";

// @emotion/react components
import { keyframes } from "@emotion/react";

import curved9 from "assets/images/curved-images/curved9.jpg";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";

// react-quill components
import ReactQuill from "react-quill";

// react-quill styles
import "react-quill/dist/quill.snow.css";

import coinbase from "assets/images/logos/gray-logos/logo-coinbase.svg";
import nasa from "assets/images/logos/gray-logos/logo-nasa.svg";
import netflix from "assets/images/logos/gray-logos/logo-netflix.svg";
import pinterest from "assets/images/logos/gray-logos/logo-pinterest.svg";
import spotify from "assets/images/logos/gray-logos/logo-spotify.svg";
import vodafone from "assets/images/logos/gray-logos/logo-vodafone.svg";

import LinearProgress from "@mui/material/LinearProgress";

import Modal from "@mui/material/Modal";

import { Pie } from "react-chartjs-2";
import { Bar, HorizontalBar } from "react-chartjs-2";
import { Doughnut } from "react-chartjs-2";
import { Radar } from "react-chartjs-2";

import { Col, Container, Jumbotron, Row } from "reactstrap";
// import CountUp from "react-countup";
// import MaterialTable from "material-table";

//icons
import ListItemIcon from "@mui/material/ListItemIcon";
import Add from "@material-ui/icons/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import DoneIcon from "@mui/icons-material/Done";
import MenuIcon from "@mui/icons-material/Menu";
import AccountBoxIcon from "@mui/icons-material/AccountBox";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";

import StorageIcon from "@mui/icons-material/Storage";
import DnsIcon from "@mui/icons-material/Dns";
import KeyboardCommandKeyIcon from "@mui/icons-material/KeyboardCommandKey";
import RefreshIcon from "@mui/icons-material/Refresh";

// import { DataGrid } from "@mui/x-data-grid";

// import CircularSlider from "react-circular-slider-svg";
import { Breadcrumbs as MuiBreadcrumbs } from "@mui/material";
import rgba from "assets/theme/functions/rgba";

// Dropzone components
import Dropzone from "dropzone";

// Dropzone styles
import "dropzone/dist/dropzone.css";
import { useDropzone } from "react-dropzone";

import TextField from "@mui/material/TextField";
import Autocomplete, { createFilterOptions } from "@mui/material/Autocomplete";

import {
	DashboardLayout,
	PageLayout,
	PayLayoutBase,
	HeaderTabs,
	SuiBox,
	SuiTypography,
	MiniStatisticsCard,
	ProfileInfoCard,
	ComplexProjectCard,
	PlaceholderCard,
	Stories,
	Footer,
	Pages,
	SuiTable,
	Configurator,
	ConfigurationButton,
	ConfigurationButton2,
	Basic,
	BasicLayout,
	TabsTop,
	Sidenav,
	routes,
	NewProject,
	NewProjectLayOut,
	SuiTableAdd,
	DashboardNavbar,
	SuiSnackbar,
	SuiSelect,
	SuiInput,
	SuiSelectElement,
	SuiToggleElement,
	SuiTextAreaElement,
	SuiInputElement,
	SaveButton,
	SaveCancelButton,
	DataTablePage,
	IconFromName,
	ChartFromDict,
	DashboardNavbarSearch,
	ImageSliderCard,
	PieChartBoxWithDropdownState,
	AlteryxPageCards,
	NavigationLayout,
	ThinBarChartBoxWithDropdownState,
	DataTable,
	HeaderTabsImage,
	DynamicLayout,
	BackgroundBlogCardNoButton,
	SuiButton,
	FormQuestionsGenerate,
	suiComponentState,
	SidenavSelectMove,
	SettingsCards,
	SettingsAccountPage,
	TableForm,
} from "./SoftElements";
export const PropsContext = React.createContext({});
export const routesDefine = () => {
	return [
		{ type: "divider", key: "divider-1" },
		{ type: "title", title: "Docs", key: "title-docs" },
		{
			type: "collapse",
			name: "Parts",
			key: "parts",
			icon: <IconFromName name={"spaceship"} />,
			collapse: [
				{
					type: "collapse",
					name: "Dashboard",
					key: "parts_list",
					href: "/#/Parts",
					icon: <IconFromName name={"creditcard"} />,
					noCollapse: true,
				},
				{
					type: "collapse",
					name: "Create",
					key: "part_form",
					href: "/#/PartForm",
					icon: <IconFromName name={"creditcard"} />,
					noCollapse: true,
				},
			],
		},
	];
};
export const DataPortal = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={3}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					{renderMetrics()}
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					{renderCharts()}
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</DynamicLayout>
	);
};

DataPortal.defaultProps = {
	routes: routesDefine(),
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		showNav: false,
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc:
		sharepointURLDirectoryDefine() + "dependencies/code/png/mtd_icon.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "Backlog",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			{
				title: "Sprint",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Sprint" });
				},
			},
			{
				title: "Accomplished",
				icon: "settings",
				func: () => {
					setFilterDict({ done_category: "Last 30 Days" });
				},
			},
			{
				title: "All",
				icon: "settings",
				func: () => {
					console.log("click backlog");
					setFilterDict({});
				},
			},
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};

export const NovaeoPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,
	questionsArray,
	questionsSave,
	pageData,
	setPageData,
	questionsCancel,
	mx,
	sectionsArray,
	showButton,
}) => {
	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SettingsAccountPage
				pageData={pageData}
				setPageData={setPageData}
				sectionsArray={sectionsArray}
				questionsSave={questionsSave}
			/>
			{showButton ? (
				<ConfigurationButton2 onClick={questionsSave} />
			) : null}
			{/* <SuiBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <SidenavSelectMove />
            </Grid>
            <Grid item xs={12} lg={9}>
              <SuiBox mb={3}>
                <SettingsCards />
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox> */}
		</DynamicLayout>
	);
};
NovaeoPage.defaultProps = {
	showButton: true,
	sectionsArray: [
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
					type: "text-area",
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
	],
	mx: 15,
	questionsArray: [],
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},
	questionsCancel: (e) => {
		console.log("save");
	},
	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: true,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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
	brand: "",
	brandName: "Novaeo",
	routes: [
		{ type: "divider", key: "divider-1" },
		{ type: "title", title: "Docs", key: "title-docs" },
		{
			type: "collapse",
			name: "Parts",
			key: "parts",
			icon: <IconFromName name={"spaceship"} />,
			collapse: [
				{
					type: "collapse",
					name: "List",
					key: "parts_list",
					href: "/#/Parts",
					icon: <IconFromName name={"creditcard"} />,
					noCollapse: true,
				},
				{
					type: "collapse",
					name: "Create",
					key: "part_form",
					href: "/#/PartForm",
					icon: <IconFromName name={"creditcard"} />,
					noCollapse: true,
				},
			],
		},
	],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",
	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};
export const MetricsGraphsDashboardCore = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<Fragment>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>

				<SuiBox marginBottom={3}>{renderCharts()}</SuiBox>

				<SuiBox marginBottom={3}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</Fragment>
	);
};

export const MetricsGraphsDashboardSideNav = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<NavigationLayout brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>

				<SuiBox marginBottom={3}>{renderCharts()}</SuiBox>

				<SuiBox marginBottom={3}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</NavigationLayout>
	);
};

MetricsGraphsDashboardSideNav.defaultProps = {
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc:
		sharepointURLDirectoryDefine() + "dependencies/code/png/mtd_icon.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "Backlog",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			{
				title: "Sprint",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Sprint" });
				},
			},
			{
				title: "Accomplished",
				icon: "settings",
				func: () => {
					setFilterDict({ done_category: "Last 30 Days" });
				},
			},
			{
				title: "All",
				icon: "settings",
				func: () => {
					console.log("click backlog");
					setFilterDict({});
				},
			},
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};
export const MetricsGraphsDashboard2 = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={3}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					{renderMetrics()}
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					{renderCharts()}
				</SuiBox>

				<SuiBox
					marginBottom={3}
					sx={{
						mx: 3,
					}}
				>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</DynamicLayout>
	);
};

MetricsGraphsDashboard2.defaultProps = {
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		showNav: false,
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc:
		sharepointURLDirectoryDefine() + "dependencies/code/png/mtd_icon.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "Backlog",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			{
				title: "Sprint",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Sprint" });
				},
			},
			{
				title: "Accomplished",
				icon: "settings",
				func: () => {
					setFilterDict({ done_category: "Last 30 Days" });
				},
			},
			{
				title: "All",
				icon: "settings",
				func: () => {
					console.log("click backlog");
					setFilterDict({});
				},
			},
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};

export const MetricsGraphsDashboard = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({ data: filteredData });

	const tabsArray = tabsFunc({ setFilterDict });

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>

				<SuiBox marginBottom={3}>{renderCharts()}</SuiBox>

				<SuiBox marginBottom={3}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</PayLayoutBase>
	);
};

MetricsGraphsDashboard.defaultProps = {
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc:
		sharepointURLDirectoryDefine() + "dependencies/code/png/mtd_icon.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "Backlog",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			{
				title: "Sprint",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Sprint" });
				},
			},
			{
				title: "Accomplished",
				icon: "settings",
				func: () => {
					setFilterDict({ done_category: "Last 30 Days" });
				},
			},
			{
				title: "All",
				icon: "settings",
				func: () => {
					console.log("click backlog");
					setFilterDict({});
				},
			},
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};

export const VisualDashboardPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({ data: filteredData });

	const tabsArray = tabsFunc({ setFilterDict });

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const pieChartConfig = {
		title: "Pie",
		onClick: onChartClickFilter,
		array: filteredData,
		options: pieOptions,
	};
	const horizontalBarChartConfig = {
		title: "Pie",
		onClick: onChartClickFilter,
		array: filteredData,
		options: horizontalBarOptions,
	};
	const horizontalStackedBarChartConfig = {
		title: "Pie",
		stackField: "priority_category",
		onClick: onChartClickFilter,
		array: filteredData,
		options: horizontalStackedBarOptions,
	};
	const thinBarChartConfig = {
		onClick: onChartClickFilter,
		array: filteredData,
		options: thinBarChartOptions,
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);

	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
				</SuiBox>

				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>

				<SuiBox marginBottom={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={3}>
							<PieChartBoxWithDropdownState {...pieChartConfig} />
						</Grid>
						<Grid item xs={12} lg={3}>
							<HorizontalChartBoxWithDropdownState
								{...horizontalBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<HorizontalStackedChartBoxWithDropdownState
								{...horizontalStackedBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<ThinBarChartBoxWithDropdownState
								{...thinBarChartConfig}
							/>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox marginBottom={3}>
					<table
						// className="table-react"
						className="table-react table table-striped table-bordered table-hover"
						style={{ width: "100%" }}
						id={tableDictWithData.id}
					></table>

					{/* <AirTablePageBaseRead
                title={jiraDataTables.title || ""}
                dataTables={jiraDataTables.dataTables || []}
              /> */}
				</SuiBox>
			</SuiBox>
			{/* <ConfigurationButton
            onClick={configurationDict.onClick}
            icon={configurationDict.icon}
          /> */}
		</PayLayoutBase>
	);
};

VisualDashboardPage.defaultProps = {
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc:
		sharepointURLDirectoryDefine() + "dependencies/code/png/mtd_icon.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "Backlog",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			{
				title: "Sprint",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Sprint" });
				},
			},
			{
				title: "Accomplished",
				icon: "settings",
				func: () => {
					setFilterDict({ done_category: "Last 30 Days" });
				},
			},
			{
				title: "All",
				icon: "settings",
				func: () => {
					console.log("click backlog");
					setFilterDict({});
				},
			},
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
	pieOptions: [
		{
			field: "priority_category",
			label: "Priority",
		},
		{
			field: "status_category",
			label: "Status",
		},
		{
			field: "priority",
			label: "Priority",
		},
	],
	horizontalBarOptions: [
		{
			field: "priority_category",
			label: "Priority",
		},
		{
			field: "status_category",
			label: "Status",
		},
		{
			field: "priority",
			label: "Priority",
		},
	],
	horizontalStackedBarOptions: [
		{
			field: "priority_category",
			label: "Priority",
		},
		{
			field: "status_category",
			label: "Status",
		},
		{
			field: "priority",
			label: "Priority",
		},
	],
	thinBarChartOptions: [
		{
			field: "priority_category",
			label: "Priority",
		},
		{
			field: "status_category",
			label: "Status",
		},
		{
			field: "priority",
			label: "Priority",
		},
	],
};
export const InteractiveDashboardPage = ({
	title,
	subTitle,
	brand,
	brandName,
	routes,
	tables,
	metrics,
	dataTable,
	status,
	people,
	jiraDataTables,
	headerTabsConfig,
	configurationDict,
	pieChartConfig,
	thinBarChartConfig,
	horizontalBarChartConfig,
	horizontalStackedBarChartConfig,
}) => {
	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			<Grid item xs={12} sm={6} lg={3}>
				<SuiBox>
					<BackgroundBlogCardNoButton {...status} />
				</SuiBox>
			</Grid>
		</Grid>
	);

	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs {...headerTabsConfig} />
				</SuiBox>

				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>

				<SuiBox marginBottom={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={3}>
							<PieChartBoxWithDropdownState {...pieChartConfig} />
						</Grid>
						<Grid item xs={12} lg={3}>
							<HorizontalChartBoxWithDropdownState
								{...horizontalBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<HorizontalStackedChartBoxWithDropdownState
								{...horizontalStackedBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<ThinBarChartBoxWithDropdownState
								{...thinBarChartConfig}
							/>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox marginBottom={3}>
					<AirTablePageBaseRead
						title={jiraDataTables.title || ""}
						dataTables={jiraDataTables.dataTables || []}
					/>
				</SuiBox>
			</SuiBox>
			<ConfigurationButton
				onClick={configurationDict.onClick}
				icon={configurationDict.icon}
			/>
		</PayLayoutBase>
	);
};

InteractiveDashboardPage.defaultProps = {
	metrics: [{ title: "Stories", metric: 100 }],
};
export const MTDDashboardPage = ({
	title,
	subTitle,
	brand,
	brandName,
	routes,
	tables,
	metrics,
	dataTable,
	status,
	people,
	jiraDataTables,
	headerTabsConfig,
	configurationDict,
	pieChartConfig,
	thinBarChartConfig,
	horizontalBarChartConfig,
	horizontalStackedBarChartConfig,
}) => {
	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			<Grid item xs={12} sm={6} lg={3}>
				<SuiBox>
					<BackgroundBlogCardNoButton {...status} />
				</SuiBox>
			</Grid>
		</Grid>
	);
	const renderTables = () => (
		<Grid container spacing={3}>
			{tables.map((tableDict, key) => (
				<Grid key={key} item xs={12} lg={4}>
					<SuiTableClick
						rows={tableDict.rows || []}
						headers={tableDict.headers || []}
						title={tableDict.title || ""}
						{...tableDict}
					/>
				</Grid>
			))}
		</Grid>
	);
	console.log(jiraDataTables);
	return (
		<PayLayoutBase brand={brand} brandName={brandName} routes={routes}>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabs {...headerTabsConfig} />
				</SuiBox>
				{/* <SuiBox marginBottom={3}>
              <Grid container>
                <Grid item xs={12} lg={12}>
                  <SuiBox mb={3} p={1}>
                    <SuiTypography
                      variant={"h1"}
                      textTransform="capitalize"
                      fontWeight="bold"
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: title || "",
                        }}
                      ></div>
                    </SuiTypography>
                    <SuiTypography variant={"h4"}>
                      <div
                        dangerouslySetInnerHTML={{
                          __html: subTitle || "",
                        }}
                      ></div>
                    </SuiTypography>
                  </SuiBox>
                </Grid>
              </Grid>
            </SuiBox> */}
				<SuiBox marginBottom={3}>{renderMetrics()}</SuiBox>
				{/* <SuiBox marginBottom={3}>
              <Stories storiesData={people} />
            </SuiBox> */}
				<SuiBox marginBottom={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={3}>
							<PieChartBoxWithDropdownState {...pieChartConfig} />
						</Grid>
						<Grid item xs={12} lg={3}>
							<HorizontalChartBoxWithDropdownState
								{...horizontalBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<HorizontalStackedChartBoxWithDropdownState
								{...horizontalStackedBarChartConfig}
							/>
						</Grid>

						<Grid item xs={12} lg={3}>
							<ThinBarChartBoxWithDropdownState
								{...thinBarChartConfig}
							/>
						</Grid>
					</Grid>
				</SuiBox>

				<SuiBox marginBottom={3}>{renderTables()}</SuiBox>

				<SuiBox marginBottom={3}>
					<AirTablePageBaseRead
						title={jiraDataTables.title || ""}
						dataTables={jiraDataTables.dataTables || []}
					/>
				</SuiBox>
				{/* <SuiBox marginBottom={3}>
              <AirTablePageBase
                title={dataTable.title || ""}
                dataTables={dataTable.dataTables || []}
              />
            </SuiBox> */}
				<SuiBox marginBottom={3}>
					<Grid container spacing={3}>
						<Grid item xs={12} lg={6}></Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
			<ConfigurationButton
				onClick={configurationDict.onClick}
				icon={configurationDict.icon}
			/>
		</PayLayoutBase>
	);
};

MTDDashboardPage.defaultProps = {
	metrics: [{ title: "Stories", metric: 100 }],
};

export const AlteryxPage = ({
	title,
	sub_title,
	brand,
	brandName,
	routes,
	imageCardConfig,
	cardTilesConfig,
	navTitle,
	pieChartConfig,
	thinBarChartConfig,
}) => {
	//example: badgesArray =  [{name:'test',image:alteryxURLDirectoryDefine()+"images\badges\AdvancedMacros.png",color:'blue'}]

	const [controller, setController] = useState({
		miniSidenav: false,
		transparentSidenav: true,
		sidenavColor: "info",
		transparentNavbar: true,
		fixedNavbar: true,
		openConfigurator: false,
		direction: "ltr",
		layout: "dashboard",
	});
	return (
		<PropsContext.Provider value={{}}>
			<ThemeProvider theme={theme}>
				<CssBaseline />
				<Sidenav
					controller={controller}
					setController={setController}
					color={controller.sidenavColor}
					brand={brand}
					brandName={brandName}
					routes={routes}
				/>
				<DashboardLayout controller={controller}>
					<DashboardNavbarSearch
						controller={controller}
						onAccountClick={() => {
							console.log("clicik");
						}}
						setController={setController}
						title={navTitle || ""}
					/>
					{/* <DashboardNavbarAlteryx
                controller={controller}
                onAccountClick={() => {
                  console.log("clicik");
                }}
                setController={setController}
                title={navTitle || ""}
              /> */}
					<SuiBox py={3}>
						<SuiBox marginBottom={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} xl={7}>
									<ImageSliderCard {...imageCardConfig} />
								</Grid>
								<Grid item xs={12} xl={5}>
									<AlteryxPageCards {...cardTilesConfig} />
								</Grid>
							</Grid>
						</SuiBox>

						<SuiBox marginBottom={3}>
							<Grid container spacing={3}>
								<Grid item xs={12} lg={6}>
									<Pages />
									{/* <DefaultTextCard title={"Upcoming Trainings"} subTitle={""} /> */}
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									<ThinBarChartBoxWithDropdownState
										{...thinBarChartConfig}
									/>

									{/* <DefaultTextCard
                        title={"External Help Links"}
                        subTitle={""}
                      /> */}
								</Grid>
								<Grid item xs={12} sm={6} lg={3}>
									{/* <DefaultTextCard title={"Demographics"} subTitle={""} /> */}
									<PieChartBoxWithDropdownState
										{...pieChartConfig}
									/>
								</Grid>
							</Grid>
						</SuiBox>
					</SuiBox>
				</DashboardLayout>
			</ThemeProvider>
		</PropsContext.Provider>
	);
};
AlteryxPage.defaultProps = {
	searchConfig: {
		label: "Search Here",
		searchFunc: (val) => {
			console.log({ val });
		},
		id: "free-solo-with-text-demo",
		options: [{ title: "The Shawshank Redemption", year: 1994 }],
	},
};

export function DataTablesExample() {
	return (
		<DashboardLayout>
			<DashboardNavbar />
			<SuiBox pt={6} pb={3}>
				<SuiBox mb={3}>
					<Card>
						<SuiBox p={3} lineHeight={1}>
							<SuiTypography variant="h5" fontWeight="medium">
								Datatable Simple
							</SuiTypography>
							<SuiTypography
								variant="button"
								fontWeight="regular"
								color="text"
							>
								A lightweight, extendable, dependency-free
								javascript HTML table plugin.
							</SuiTypography>
						</SuiBox>
						<DataTable />

						{/* <DataTable table={dataTableData} /> */}
					</Card>
				</SuiBox>
				<Card>
					<SuiBox p={3} lineHeight={1}>
						<SuiTypography variant="h5" fontWeight="medium">
							Datatable Search
						</SuiTypography>
						<SuiTypography
							variant="button"
							fontWeight="regular"
							color="text"
						>
							A lightweight, extendable, dependency-free
							javascript HTML table plugin.
						</SuiTypography>
					</SuiBox>
					<DataTable table={dataTableData} canSearch />
				</Card>
			</SuiBox>
			<Footer />
		</DashboardLayout>
	);
}

export const UserPortalPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,

	questionsArray,
	questionsSave,
	pageData,
	setPageData,
	questionsCancel,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabsImage
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>
					<SuiBox mb={3}>
						<Grid container spacing={3}>
							<Grid item xs={12}>
								<Card sx={{ overflow: "visible" }}>
									<SuiBox p={2} lineHeight={1}>
										<DataTable table={table} />
									</SuiBox>
								</Card>
							</Grid>

							<Grid item xs={12}>
								<Card sx={{ overflow: "visible" }}>
									<SuiBox p={2} lineHeight={1}>
										<SaveCancelButton
											onSave={questionsSave}
											onCancel={questionsCancel}
										/>
									</SuiBox>
								</Card>
							</Grid>
						</Grid>
					</SuiBox>
				</SuiBox>
			</SuiBox>
		</DynamicLayout>
	);
};

UserPortalPage.defaultProps = {
	questionsArray: [],
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},
	questionsCancel: (e) => {
		console.log("save");
	},

	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: false,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};
export const FormPage1 = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,
	questionsArray,
	questionsSave,
	pageData,
	setPageData,
	questionsCancel,
	mx,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox
					mt={3}
					mb={4}
					mb={4}
					sx={{
						mx: mx,
						// py: 2,
						// px: 2,
					}}
				>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<SuiBox mt={6} mb={0} textAlign="center">
								<SuiBox mb={1}>
									<SuiTypography
										variant="h4"
										fontWeight="bold"
									>
										{title}
									</SuiTypography>
								</SuiBox>
								<SuiTypography
									variant="h5"
									fontWeight="regular"
									color="secondary"
								>
									{subTitle}
								</SuiTypography>
							</SuiBox>
						</Grid>
						<Grid item xs={12}>
							<Card sx={{ overflow: "visible" }}>
								<SuiBox
									p={2}
									lineHeight={1}
									sx={{
										mx: 5,
										// py: 2,
										// px: 2,
									}}
								>
									<FormQuestionsGenerate
										pageData={pageData}
										setPageData={setPageData}
										questionsData={questionsArray}
									/>
									<SaveCancelButton
										onSave={questionsSave}
										onCancel={questionsCancel}
									/>
								</SuiBox>
							</Card>
						</Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
		</DynamicLayout>
	);
};

FormPage1.defaultProps = {
	mx: 15,
	questionsArray: [],
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},
	questionsCancel: (e) => {
		console.log("save");
	},
	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: false,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};
export const FormPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,
	questionsArray,
	questionsSave,
	pageData,
	setPageData,
	questionsCancel,
	mx,
	sectionsArray,
	showTabsNav,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	const CardQuestions = () => (
		<Grid container spacing={3}>
			<Grid item xs={12}>
				<SuiBox mt={6} mb={0} textAlign="center">
					<SuiBox mb={1}>
						<SuiTypography variant="h4" fontWeight="bold">
							{title}
						</SuiTypography>
					</SuiBox>
					<SuiTypography
						variant="h5"
						fontWeight="regular"
						color="secondary"
					>
						{subTitle}
					</SuiTypography>
				</SuiBox>
			</Grid>
			<Grid item xs={12}>
				<Card sx={{ overflow: "visible" }}>
					<SuiBox
						p={2}
						lineHeight={1}
						sx={{
							mx: 5,
							// py: 2,
							// px: 2,
						}}
					>
						<FormQuestionsGenerate
							pageData={pageData}
							setPageData={setPageData}
							questionsData={questionsArray}
						/>
						<SaveCancelButton
							onSave={questionsSave}
							onCancel={questionsCancel}
						/>
					</SuiBox>
				</Card>
			</Grid>
		</Grid>
	);

	const CardQuestionsNav = () => (
		<Grid container spacing={3}>
			<Grid item xs={12} lg={3}>
				<SidenavSelectMove sidenavItems={sectionsArray} />
			</Grid>
			<Grid item xs={12} lg={9}>
				<SuiBox mb={3}>{CardQuestions()}</SuiBox>
			</Grid>
		</Grid>
	);
	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox
					mt={3}
					mb={4}
					mb={4}
					sx={{
						mx: mx,
						// py: 2,
						// px: 2,
					}}
				>
					{showTabsNav ? CardQuestionsNav() : CardQuestions()}
				</SuiBox>
			</SuiBox>
		</DynamicLayout>
	);
};

FormPage.defaultProps = {
	showTabsNav: true,
	sectionsArray: [
		{
			href: "general",
			label: "General",
			icon: "1",
		},
		{
			href: "general",
			label: "General",
			icon: "1",
		},
	],
	mx: 15,
	questionsArray: [],
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},
	questionsCancel: (e) => {
		console.log("save");
	},
	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: false,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};

export const SettingFormPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,
	questionsArray,
	questionsSave,
	pageData,
	setPageData,
	questionsCancel,
	mx,
	sectionsArray,
	showButton,
}) => {
	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SettingsAccountPage
				pageData={pageData}
				setPageData={setPageData}
				sectionsArray={sectionsArray}
				questionsSave={questionsSave}
			/>
			{showButton ? (
				<ConfigurationButton2 onClick={questionsSave} />
			) : null}
			{/* <SuiBox mt={4}>
          <Grid container spacing={3}>
            <Grid item xs={12} lg={3}>
              <SidenavSelectMove />
            </Grid>
            <Grid item xs={12} lg={9}>
              <SuiBox mb={3}>
                <SettingsCards />
              </SuiBox>
            </Grid>
          </Grid>
        </SuiBox> */}
		</DynamicLayout>
	);
};

SettingFormPage.defaultProps = {
	showButton: true,
	sectionsArray: [
		{
			href: "general",
			label: "General",
			icon: "1",
			tableConfig: {
				node: "rows",
				columns: [{ Header: "name", accessor: "name", width: "20%" }],
			},
			questionsArray: [
				{
					category: "config_tenant_questions",
					order: "5",
					section: "about",
					id: "migration_confirm",
					text: "Cloud Migration Journey",
					description:
						"By selecting yes, you have officially begun your cloud migration journey",
					value: "Yes, No",
					isMulti: false,
					type: "multi-select",
					help_text: null,
					example: null,
				},
			],
		},
	],
	mx: 15,
	questionsArray: [],
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},
	questionsCancel: (e) => {
		console.log("save");
	},
	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: false,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};
export const TablePortalPage = ({
	data,
	brand,
	brandName,
	routes,
	pieOptions,
	horizontalBarOptions,
	horizontalStackedBarOptions,
	thinBarChartOptions,
	dataTablesConfig,
	tableDict,
	tabsFunc,
	metricsFunc,
	title,
	subTitle,
	imageSrc,
	status,
	charts,
	showNav,
	table,
}) => {
	const [filterDict, setFilterDict] = useState({});
	const updateFilterDict = (updatedFilterDict) => {
		setFilterDict({ ...filterDict, ...updatedFilterDict });
	};

	const filteredData = arrayFilterFromDict(data, filterDict);
	const metrics = metricsFunc({
		data: filteredData,
		setFilterDict,
		filterDict,
	});

	const tabsArray = tabsFunc({ setFilterDict });
	useEffect(() => {
		tabsArray[0]["func"]();
	}, []);

	const onChartClickFilter = ({ field, label, value }) => {
		if (Object.keys(filterDict).indexOf(field) > -1) {
			if (filterDict[field] != null) {
				var D = {};
				D[field] = null;
				updateFilterDict(D);
			} else {
				var D = {};
				D[field] = value;
				updateFilterDict(D);
			}
		} else {
			var D = {};
			D[field] = value;
			updateFilterDict(D);
		}
		console.log({ field, label, value });
	};

	const renderMetrics = () => (
		<Grid container spacing={3}>
			{metrics.map((tableDict, key) => (
				<Grid item key={key} xs={12} sm={6} lg={2}>
					<MiniStatisticsCard
						bgColor="white"
						title={{
							text: tableDict.title || "",
							fontWeight: "bold",
						}}
						count={tableDict.metric || ""}
						percentage={{
							color: "error",
							text: "",
						}}
						icon={<IconFromName name={tableDict.icon || ""} />}
					/>
				</Grid>
			))}
			{status != null ? (
				<Grid item xs={12} sm={6} lg={3}>
					<SuiBox>
						<BackgroundBlogCardNoButton {...status} />
					</SuiBox>
				</Grid>
			) : null}
		</Grid>
	);
	const renderCharts = () => (
		<Grid container spacing={3}>
			{charts.map((chartDict, key) => {
				// console.log({ chartDict });
				return (
					<Grid item xs={12} lg={3} key={key}>
						<ChartFromDict
							chartDict={chartDict}
							onChartClickFilter={onChartClickFilter}
							array={filteredData}
						/>
					</Grid>
				);
			})}
		</Grid>
	);
	const filteredDataChecked = arrayFilterFromDict(
		dataDataTablesReformatFix({
			data: filteredData,
			columns: tableDict.columns,
		}),
		filterDict
	);
	const tableDictWithData = { ...tableDict, data: filteredDataChecked };

	useEffect(() => {
		datatables_determine_create_update(
			"#" + tableDictWithData.id,
			tableDictWithData,
			tableDictWithData.data
		);
	}, [filteredData.length]);

	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox marginBottom={3}>
					<HeaderTabsImage
						title={title}
						subTitle={subTitle}
						imageSrc={imageSrc}
						tabsArray={tabsArray}
					/>

					<Card sx={{ overflow: "visible" }}>
						<SuiBox p={2} lineHeight={1}>
							<DataTable table={table} />
						</SuiBox>
					</Card>
				</SuiBox>
			</SuiBox>
		</DynamicLayout>
	);
};

TablePortalPage.defaultProps = {
	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{ Header: "salary", accessor: "salary" },
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},
	showNav: false,
	data: [{ priority_category: "high" }, { priority_category: "low" }],
	status: {
		title: "In Development",
		image:
			sharepointURLDirectoryDefine() +
			"dependencies/code/img/ivancik.jpg",
		description: "", //'Capture key details arond key projects, business use cases, accomplishments across each Tenant. This addresses the problem that there is a lack of insight into what Tenants are being used for.',
		buttonText: "Read More",
		action: {
			type: "internal",
			route: "/MTD",
			label: "Read More",
		},
	},
	tableDict: {
		id: "table",
		dom: '<"html5buttons"B>lTfgitp',
		data: [],
		columns: [
			{
				data: "priority_category",
				title: "priority_category",
				visible: true,
			},
		],
		select: true,
		paging: false,
		scrollX: true,
		buttons: [
			{
				extend: "excel",
				title: document.title,
			},
			{
				extend: "colvis",
				title: document.title,
			},
			// {
			//   extend: "create",
			//   editor: editor,
			//   text: "Create",
			// },
			// {
			//   extend: "remove",
			//   editor: editor,
			// },
			// {
			//   extend: "edit",
			//   editor: editor,
			// },
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

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "Sub Title",
	imageSrc: sharepointURLDirectoryDefine() + "dependencies/code/png/hive.png",

	tabsFunc: ({ setFilterDict }) => {
		return [
			{
				title: "All",
				icon: "settings",
				func: () => {
					setFilterDict({ backlog_category: "Backlog" });
				},
			},
			// {
			//   title: "Sprint",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ backlog_category: "Sprint" });
			//   },
			// },
			// {
			//   title: "Accomplished",
			//   icon: "settings",
			//   func: () => {
			//     setFilterDict({ done_category: "Last 30 Days" });
			//   },
			// },
			// {
			//   title: "All",
			//   icon: "settings",
			//   func: () => {
			//     console.log("click backlog");
			//     setFilterDict({});
			//   },
			// },
		];
	},
	metricsFunc: ({ data, setFilterDict }) => {
		return [{ title: "Stories", metric: 100 }];
	},
	metrics: [{ title: "Stories", metric: 100 }],
	charts: [
		{
			type: "pie",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "horizontal-bar-stacked",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
		{
			type: "bar",
			options: [
				{
					field: "priority_category",
					label: "Priority",
				},
			],
		},
	],
};

const Sandbox = () => {
	return (
		<SuiBox py={3}>
			<SuiBox marginBottom={3}>
				<HeaderTabsImage
					title={title}
					subTitle={subTitle}
					imageSrc={imageSrc}
					tabsArray={tabsArray}
				/>
				<SuiBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Card id="delete-account">
								<SuiBox p={3} lineHeight={1}>
									<SuiBox mb={1}>
										<SuiTypography variant="h5">
											ConfirmTables
										</SuiTypography>
									</SuiBox>
									<SuiTypography
										variant="button"
										color="text"
										fontWeight="regular"
									>
										Confirm that you utilize the below
										tables
									</SuiTypography>
								</SuiBox>
								<SuiBox
									pb={3}
									px={3}
									display="flex"
									justifyContent="space-between"
									alignItems={{
										xs: "flex-start",
										sm: "center",
									}}
									flexDirection={{ xs: "column", sm: "row" }}
								>
									<SuiBox
										display="flex"
										alignItems="center"
										mb={{ xs: 3, sm: 0 }}
									>
										<Switch />
										<SuiBox ml={2} lineHeight={0}>
											<SuiTypography
												display="block"
												variant="button"
												fontWeight="medium"
											>
												Confirm
											</SuiTypography>
											<SuiTypography
												variant="caption"
												color="text"
											>
												I want to delete my account.
											</SuiTypography>
										</SuiBox>
									</SuiBox>
									<SuiBox
										display="flex"
										flexDirection={{
											xs: "column",
											sm: "row",
										}}
									>
										<SuiButton
											variant="outlined"
											color="secondary"
										>
											deactivate
										</SuiButton>
										<SuiBox
											ml={{ xs: 0, sm: 1 }}
											mt={{ xs: 1, sm: 0 }}
										>
											<SuiButton
												variant="gradient"
												color="error"
												sx={{ height: "100%" }}
											>
												Confirm Tables
											</SuiButton>
										</SuiBox>
									</SuiBox>
								</SuiBox>
							</Card>
						</Grid>
						<Grid item xs={12}>
							<Card sx={{ overflow: "visible" }}>
								<SuiBox p={2} lineHeight={1}>
									<DataTable table={table} />
								</SuiBox>
							</Card>
						</Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
		</SuiBox>
	);
};

export const PortalPage = ({
	brand,
	brandName,
	routes,
	title,
	subTitle,
	showNav,
	questionsSave,
	pageData,
	setPageData,
	table,
}) => {
	return (
		<DynamicLayout
			brand={brand}
			brandName={brandName}
			routes={routes}
			showNav={showNav}
		>
			<SuiBox py={3}>
				<SuiBox mb={3}>
					<Grid container spacing={3}>
						<Grid item xs={12}>
							<Card sx={{ overflow: "visible" }}>
								<SuiBox p={2} lineHeight={1}>
									<SuiBox
										height="100%"
										mt={0.5}
										lineHeight={2}
									>
										<SuiTypography
											variant="h5"
											fontWeight="medium"
										>
											{title || ""}
										</SuiTypography>
										<SuiTypography
											variant="button"
											color="text"
											fontWeight="medium"
										>
											{subTitle || ""}
										</SuiTypography>
									</SuiBox>
									<TableForm
										pageData={pageData}
										setPageData={setPageData}
										columns={table.columns}
									/>
									<SuiBox
										display="flex"
										justifyContent="flex-end"
										mt={3}
									>
										<SuiButton
											onClick={questionsSave}
											variant="gradient"
											color="info"
										>
											Save
										</SuiButton>
									</SuiBox>
								</SuiBox>
							</Card>
						</Grid>
					</Grid>
				</SuiBox>
			</SuiBox>
		</DynamicLayout>
	);
};

PortalPage.defaultProps = {
	questionsSave: (e) => {
		console.log("save");
	},
	pageData: {},
	setPageData: (pageData) => {
		console.log({ pageData });
	},

	table: {
		columns: [
			{ Header: "name", accessor: "name", width: "20%" },
			{ Header: "position", accessor: "position", width: "25%" },
			{ Header: "office", accessor: "office" },
			{ Header: "age", accessor: "age", width: "7%" },
			{ Header: "start date", accessor: "startDate" },
			{
				Header: "Select Action",
				accessor: "selection",
				Cell: {
					type: "select",
					options: [
						{ value: "one", label: "one" },
						{ value: "two", label: "two" },
					],
				},
			},
			{
				Header: "Check",
				accessor: "check",
				Cell: { type: "switch" },
			},
		],

		rows: [
			{
				name: "Hanny Baniard",
				position: "Data Coordiator",
				office: "Baorixile",
				age: 42,
				startDate: "4/11/2021",
				salary: "$474,978",
			},
		],
	},

	node: "rows",
	showNav: false,

	brand: "",
	brandName: "",
	routes: [],
	title: "Dashboard",
	subTitle: "",
};
