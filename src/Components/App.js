import React, { Component } from 'react';
import { Route, Routes } from "react-router-dom";

// import all the pages Here
import SpecialThanks from './SpecialThanks';
import Main from './MainPage';
import Navbar from './Navbar';
import ContactMe from './ContactMe';


function App() {
  return (
	  <div>	
		  		<Navbar/>
				<Routes>
					<Route exact path="/"  element={<Main/>} />
					<Route exact path="/Main"  element={<Main/>} />
			  		<Route exact path="/SpecialThanks" element={<SpecialThanks />} />
			  		<Route exact path="/ContactMe" element={<ContactMe />} />
			  
				</Routes>

		</div>
  );
}

export default App;