const {S3} = require('aws-sdk');
var s3 = new S3({apiVersion: '2006-03-01'});
params = {
			Bucket : 'ashmeet-wedding', Key : 'img1.jpg'
		};
var promise = s3.getSignedUrl('getObject', params);
console.log(promise);