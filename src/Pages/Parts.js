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

const DataPortalConfig = () => {
	const sheet_names = ["Parts", "Goods", "Mapping"];
	const access_key = "AIzaSyBbV-veLJYxgpNWWGDEdIF7eHjFTTtrSCU";
	const sheet_id = "11Zo4Z1OQOJpneoY5stYmb1Bsyoxc_cOukGHmHxMmHcs";

	const workbook = useWorkbook({
		sheet_names,
		access_key,
		sheet_id,
	});
	console.log({ workbook });
	return {
		showNav: true,
		routes: routesDefine(),
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
