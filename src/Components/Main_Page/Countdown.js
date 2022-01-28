import React, { Component } from 'react'


var weddate = new Date("02/15/2022");
var currdate = new Date();

  
// To calculate the time difference of two dates
var Difference_In_Time = weddate.getTime() - currdate.getTime();
  
// To calculate the no. of days between two dates
var Difference_In_Days = Math.round(Difference_In_Time / (1000 * 3600 * 24));
  
//To display the final no. of days (result)
console.log("CountDown "+ Difference_In_Days+" Days");



class Countdown extends Component{


	render() {		
			return (
				<div >
					<p class="justify-center text-2xl">{Difference_In_Days} Days to go.</p>
				</div>
			)
		
			
	}
}

export default Countdown