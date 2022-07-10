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

	return (
		<NovaeoPage />
		// <BnbHomePage
		// 	routes={routes}
		// 	navTitle={userDict.displayName}
		// 	sideTitle={"Novaeo"}
		// 	readArray={readArray}
		// 	metrics={metrics}
		// 	pieChartConfig={pieChartConfig}
		// 	horizontalBarChartConfig={horizontalBarChartConfig}
		// 	horizontalStackedBarChartConfig={pieChartConfig}
		// 	thinBarChartConfig={pieChartConfig}
		// />
	);
};
export default Home;
