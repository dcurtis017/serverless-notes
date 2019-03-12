import AWS from "aws-sdk";

export function call(action, params){
    const dynamoDb = new AWS.DynamoDB.DocumentClient();
    // if your table is in another region than your lambda
    //AWS.config.update({ region: "my-region" });
    return dynamoDb[action](params).promise();
}