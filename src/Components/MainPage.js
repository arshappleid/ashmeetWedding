import React, { Component } from 'react'
import List from './List'
import Title from './Title'
import photoWall from './photoWall'
import Main1 from './Main_Page/MainPage_1';
import Main2 from './Main_Page/MainPage_2';
import Main3 from './Main_Page/MainPage_3';
import Main4 from './Main_Page/MainPage_4';
import Main5 from './Main_Page/MainPage_5';
import whiteStone from "./images/white_stone.jpg";



let experience = ["Rogers","BestBuy"]

class Main extends Component {
	render() {
		
		return <div background-color="#FAD7A0">
			<div class="topheader" id="topHeader" style={{
				backgroundImage: `url(${whiteStone})`
			}} >
  				<h2>Ashmeets weds Parampal</h2>
			</div>
			<Main1 />
			<Main2 />
			<Main3 />
			<Main4 />
			<Main5 />
			
		</div>
	}
}

export default Main