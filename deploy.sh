#!/bin/bash

# DEPLOY_SERVER=$DEPLOY_SERVER
# SERVER_FOLDER="html-folder-in-server"
PASSWORD="Surajit@1992"

# Building React output
# npm install
# npm run build

pwd

ls

echo "Surajit"

# echo "Deploying to ${DEPLOY_SERVER}"
# scp -r public/ administrator:${PASSWORD}@91.107.229.125:/C:/Users/Administrator/Desktop/build
# scp -r public/ surajit:surajit@91.107.229.125:build
# cp -r public/ ftp://surajit:surajit@91.107.229.125:/build

password="Surajit@1992"
username="administrator"
Ip="91.107.229.125"
sshpass -p "$password" scp -o StrictHostKeyChecking=no -l public/ $username@$Ip:/C:/Users/Administrator/Desktop/build

echo "Finished copying the build files"