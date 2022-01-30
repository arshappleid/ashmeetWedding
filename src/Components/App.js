import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

// import all the pages Here
import SpecialThanks from './SpecialThanks';
import Main from './MainPage';
import Navbar from './Navbar';
import RequestImages from './RequestImages';


function App() {
  return (
	  <div>	
		  		<Navbar/>
				<Routes>
					<Route exact path="/"  element={<Main/>} />
					<Route exact path="/MainPage" element={<Main />} />
					<Route exact path="/RequestImages"  element={<RequestImages/>} />
			  
				</Routes>

		</div>
  );
}

export default App;