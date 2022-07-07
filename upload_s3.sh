#!/bin/bash

bash make_tar.sh 
FILE_NAME=arcana-storage-dev.tar
aws s3 cp $FILE_NAME s3://testnet-dev/$FILE_NAME
rm storage.tar
echo NPM Link: https://testnet-dev.s3.ap-south-1.amazonaws.com/$FILE_NAME