const { S3, config } = require("aws-sdk");

(async function () {
	try {

		aws.config.setPromisesDependency();
		aws.config.upfate({
			accessKeyId: config.aws.accessKey,
			secretAccessKey: config.aws.secretAccessKey,
			region : 'us-east-1'
		});

		const s3 = new S3();
		const response = await s3.listObjectsV2({
			Bucket: "ashi-wedding",
			Prefix : "wedding"
		}).promise();

		console.log(response);

	} catch (e) {
		console.log("Error occured :", e);
	}

})();