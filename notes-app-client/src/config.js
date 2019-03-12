export default {
    s3: {
      REGION: "us-east-1",
      BUCKET: "serverless-stack-dnc"
    },
    apiGateway: {
      REGION: "us-east-1",
      URL: "https://zz500y1rsc.execute-api.us-east-1.amazonaws.com/prod"
    },
    cognito: {
      REGION: "us-east-1",
      USER_POOL_ID: "us-east-1_BGUlscSiS",
      APP_CLIENT_ID: "7scojgvkiadtkgnf1gngkhi5ei",
      IDENTITY_POOL_ID: "us-east-1:188d32a5-08ee-4a97-a75c-b3a08796577f"
    },
    MAX_ATTACHMENT_SIZE: 50000
  };