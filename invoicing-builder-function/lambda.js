const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });

exports.handler = async (event) => {
    console.log('event', event);

    const params = {
        Body: event.Records[0].Sns.Message,
        Bucket: 'manning-invoices',
        Key: 'invoice',
    };

    return new Promise(function (resolve, reject) {
        s3.putObject(params, function (err, data) {
            if (err) {
                reject(err);
            } else {
                resolve(200);
            }
        });
    });
};
