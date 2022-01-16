import renderimg from './renderimg';

const { render } = require("@testing-library/react");
const { S3 } = require("aws-sdk");
const s3 = new S3();




const opts = {
  Bucket: "ashi-wedding" /* required */,
  // ContinuationToken: 'STRING_VALUE',
  // Delimiter: 'STRING_VALUE',
  EncodingType: "url"
  // FetchOwner: true || false,
  // MaxKeys: 'NUMBER_VALUE',
  // Prefix: 'STRING_VALUE',
  // RequestPayer: requester,
  // StartAfter: 'STRING_VALUE'
};


// Will list all the files inside the bucket.
async function* listAllKeys(opts) {
  opts = { ...opts };
  do {
    const data = await s3.listObjectsV2(opts).promise();
    opts.ContinuationToken = data.NextContinuationToken;
    yield data;
  } while (opts.ContinuationToken);
}


export async function displayImgs() {
  // using for of await loop
	for await (const data of listAllKeys(opts)) {
	  console.log(data.Contents);
	  renderimg(data.url);	
 	 }
}



