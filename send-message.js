// Load the AWS SDK for Node.js
var AWS = require('aws-sdk');
// Set the region 
AWS.config.update({
    region: 'localregion',
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
    endpoint: 'http://localhost:4576',
});

// Create the SQS service object
var sqs = new AWS.SQS({apiVersion: '2012-11-05'});

var msg = { 
    id: '101',
    s3BasePath : "http://localhost:4572/",
    createdOn: new Date,
};

var sqsParams = {
  MessageBody: JSON.stringify(msg),
  QueueUrl: 'http://localhost:4576/queue/SyamsQueue'
};

sqs.sendMessage(sqsParams, function(err, data) {
  if (err) {
    console.log('ERR', err);
  }

  console.log(data);
});