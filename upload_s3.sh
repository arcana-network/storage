#!/bin/bash
 
 npm run build
 mkdir storage
 cp package.json storage
 cp -avr dist storage
 cp -avr types storage
 tar -cvf storage.tar storage
 rm -rfv storage
 FILE_NAME=storage-$(date +%s)-$(sha224sum storage.tar | cut -d ' ' -f 1).tar
 aws s3 cp storage.tar s3://testnet-dev/$FILE_NAME
 rm storage.tar
 echo NPM Link: https://testnet-dev.s3.ap-south-1.amazonaws.com/$FILE_NAME