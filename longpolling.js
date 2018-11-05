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

var params = {
  QueueName: 'SyamsQueue',
  Attributes: {
    'ReceiveMessageWaitTimeSeconds': '20',
  }
};

sqs.createQueue(params, function(err, data) {
  if (err) {
    console.log("Error", err);
  } else {
    console.log("Success", data.QueueUrl);
  }
});