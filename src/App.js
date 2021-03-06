import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar,  Footer } from "./components";
import Home from './pages/HomePage/Home'
function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route path='/' exact component={Home} />
				</Switch>
				<Footer />
			</Router>
		</>
	);
}

export default App;
