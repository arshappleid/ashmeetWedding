import React, { Component } from 'react'
import { AWS } from 'aws-sdk';
// Load the AWS SDK for Node.js

// Set the region 
AWS.config.loadFromPath('./config.json');

// Create S3 service object
let s3 = new AWS.S3({apiVersion: '2006-03-01'});

let bucketName = "ashmeet-wedding";
// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'ashmeet-wedding',
};
let keys = [];

function getUrls(bucketParams) {
	
		let data = s3.listObjectsV2(bucketParams).promise();
		console.log(data);

		// using for of await loop
		keys= [];
		
		for (let i = 0; i < data.Contents.length; i++) {
			var key = (data.Contents[i].Key);
			let params = { Bucket: bucketName, Key: key };
			s3.getSignedUrl('getObject', params, function (err, url) {
				console.log(url);
				keys.push(url);
			});
		}
			
		
		return keys;
	}



class RenImages extends Component{

	urls = getUrls(bucketParams);

	renderHtml(url) {
		return (
			<div className="imgbox">
				<img src = {url}/>
			</div>
		)
	}

	
	render() {
		return (
			<div class = "flex space-x-10">
				<script>
				urls.map(renderHtml);
				</script>
			</div>
		)
	}
	

	
}

export default RenImages