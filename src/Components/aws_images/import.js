// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.loadFromPath('./config.json');

// Create S3 service object
s3 = new AWS.S3({apiVersion: '2006-03-01'});

let bucketName = "ashmeet-wedding";
// Create the parameters for calling listObjects
var bucketParams = {
  Bucket : 'ashmeet-wedding',
};
let keys = [];

// Call S3 to obtain a list of the objects in the bucket

let data = s3.listObjectsV2(bucketParams);
console.log(data.Contents);




async function getUrls(data) {
  // using for of await loop
  
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






