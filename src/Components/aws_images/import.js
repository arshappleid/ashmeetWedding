const { S3 } = require("aws-sdk");
const login_details = require("./awslogin.json")

var s3 = new S3(login_details);
// Prefic ="folderName" for params
var params = {
  Bucket: 'ashmeet-wedding',
  Key: 'img1.jpg'
};
var param1 = {
  Bucket: 'ashmeet-wedding',ContentType: 'image/jpeg'
}

async function* listAllKeys(opts) {
  opts = { ...opts };
  do {
    const data = await s3.listObjectsV2(opts).promise();
    opts.ContinuationToken = data.NextContinuationToken;
    yield data;
  } while (opts.ContinuationToken);
}

listAllKeys(param1);

async function main() {
  // using for of await loop
  let keys = [];
  for await (const data of listAllKeys(params)) {
    for (let i = 0; i < data.Contents.length; i++) {
      keys.push(data.Contents[i].Key);
    }
  }
  console.log(keys);
  
}
main();

try {
  const url = s3.getSignedUrl('GetObject', params);

  console.log("Url : ", url);
} catch (err) {
  console.log("Error : ", err);
}