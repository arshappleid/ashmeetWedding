
import React, { Component } from 'react'

import Main1 from './Main_Page/MainPage_1';
import Main2 from './Main_Page/MainPage_2';
import Main3 from './Main_Page/MainPage_3';
import Main4 from './Main_Page/MainPage_4';
import Main5 from './Main_Page/MainPage_5';
import Header from './Main_Page/Header';
import Footer from './Footer';

import RenImages from './aws_images/RenImages';


class Main extends Component {
	render() {
		return <div background-color="#c85d6d">
			<RenImages/>
		</div>
	}
}

export default Main