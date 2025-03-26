# WEB CV 2.0

## Init

Run the following command
```bat
npm i
```

## Run locally

Run the following command
```bat
npm run start
```
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.
The page will reload when you make changes.


## AWS Configuration for deploiement

- S3 bucket
- Certificate Manager
- CloudFront

## Deploy on AWS
Website is deployed publically at this url : https://www.noedelcroix.com


- If not already done, install AWS CLI : https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html

- configure aws cli
```bat
aws configure
```
AWS Access Key ID: <IAM>
AWS Secret Access Key: <IAM>
Default region name: eu-west-3
Default output format: json


- Build and deploy the website to aws :
```bat
npm run deploy
```





