import "./index.css";
import React from "react";
// import 'antd/dist/antd.css';

import TimeZoneConverter from "./TimeZoneConverter.jsx";
import ThemeProvider from "./Context/ThemeContext.js";

function App() {
	return (
		<React.Fragment>
			<ThemeProvider>
				<TimeZoneConverter />
			</ThemeProvider>
		</React.Fragment>
	);
}

export default App;
