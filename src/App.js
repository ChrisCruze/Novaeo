import React, { Fragment, useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { Component } from "react";
import { HashRouter, Route, Link, Switch } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Login from "./Pages/Login";
import Survey from "./Pages/Survey";
import Landing from "./Pages/Landing";
import Home from "./Pages/Home";
import Parts from "./Pages/Parts";
import PartForm from "./Pages/PartForm";
import Products from "./Pages/Products";
import Product from "./Pages/Product";
import Part from "./Pages/Part";

import SoftElements from "./SoftElements";
import "dropzone/dist/dropzone.css";
import "./index.scss";

class App extends React.Component {
	render() {
		return (
			<div id="wrapper" style={{ backgroundColor: "#fffff" }}>
				<HashRouter>
					<Switch>
						<Route exact path="/" component={Login} />
						<Route exact path="/Home" component={Home} />
						<Route exact path="/Products" component={Products} />
						<Route exact path="/Product" component={Product} />
						<Route exact path="/Parts" component={Parts} />
						<Route exact path="/PartForm" component={PartForm} />
						<Route exact path="/Part" component={Part} />

						<Route exact path="/Dashboard" component={Home} />
						<Route exact path="/Login" component={Login} />
						<Route exact path="/Survey" component={Survey} />
						<Route exact path="/Landing" component={Landing} />
						<Route
							exact
							path="/SoftElements"
							component={SoftElements}
						/>
					</Switch>
				</HashRouter>
			</div>
		);
	}
}

export default App;
