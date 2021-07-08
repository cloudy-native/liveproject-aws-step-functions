# Create a Lambda from the CLI

```
❯ aws lambda create-function --function-name BookMuseum --runtime nodejs14.x --zip-file fileb://lambda.zip --handler index.handler --role arn:aws:iam::607477397669:role/BookMuseumLambdaRole
{
    "FunctionName": "BookMuseum",
    "FunctionArn": "arn:aws:lambda:us-east-1:607477397669:function:BookMuseum",
    "Runtime": "nodejs14.x",
    "Role": "arn:aws:iam::607477397669:role/BookMuseumLambdaRole",
    "Handler": "index.handler",
    "CodeSize": 49206,
    "Description": "",
    "Timeout": 3,
    "MemorySize": 128,
    "LastModified": "2021-07-08T02:15:23.049+0000",
    "CodeSha256": "zhUC6M5uT5u59TKHUEx2gwRlHLZIx5nzS6FsZpY6XT8=",
    "Version": "$LATEST",
    "TracingConfig": {
        "Mode": "PassThrough"
    },
    "RevisionId": "aec5cf6c-899c-406d-b901-d9b8704a473f",
    "State": "Active",
    "LastUpdateStatus": "Successful",
    "PackageType": "Zip"
}
```

```
❯ aws lambda invoke --function-name BookMuseum --invocation-type Event --cli-binary-format raw-in-base64-out --payload '{"buyer_id":"mariano","museum_name":"tate gallery","when":"2020-03-14"}' response.json
{
    "StatusCode": 202
}
```


