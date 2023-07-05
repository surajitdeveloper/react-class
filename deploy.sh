#!/bin/bash

# DEPLOY_SERVER=$DEPLOY_SERVER
# SERVER_FOLDER="html-folder-in-server"

# Building React output
# npm install
# npm run build

pwd

ls

echo "Surajit"

# echo "Deploying to ${DEPLOY_SERVER}"
# scp -r public/ surajit:surajit@91.107.229.125:build
cp -r public/ surajit:surajit@91.107.229.125:/build

echo "Finished copying the build files"