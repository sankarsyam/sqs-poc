var Consumer = require('sqs-consumer');
var AWS = require('aws-sdk');

AWS.config.update({
    region: 'localregion',
    accessKeyId: 'foo',
    secretAccessKey: 'bar',
   
});

var app = Consumer.create({
  queueUrl: 'http://localhost:4576/queue/SyamsQueue',
  batchSize: 10,
  handleMessage: function (message, done) {

    let msgBody = JSON.parse(message.Body);
    
    console.log("S3 path:"+msgBody.s3BasePath);

    return done();

  },
  sqs: new AWS.SQS()
});

app.on('error', function (err) {
  console.log(err);
});

app.start();