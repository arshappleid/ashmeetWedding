
import React, { Component } from 'react'

import Main1 from './Main_Page/MainPage_1';
import Main2 from './Main_Page/MainPage_2';
import Main3 from './Main_Page/MainPage_3';
import Main4 from './Main_Page/MainPage_4';
import Main5 from './Main_Page/MainPage_5';
import Header from './Main_Page/Header';
import Footer from './Footer';
import Countdown from './Main_Page/Countdown';


class Main extends Component {
	render() {
		return <div styles = {"background:rgb(231,180,32)"}>
			<Header /><p></p>
			<Countdown/>
			<Main2 /><p></p>
			<Main3 /><p></p>
			<Main1 /><p></p>			
			<Footer/><p></p>
		</div>
	}
}

export default Main