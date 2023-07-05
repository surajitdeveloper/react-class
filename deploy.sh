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
# cp -r public/ ftp://surajit:surajit@91.107.229.125:/build
ftp 91.107.229.125
surajit
surajit
put public
bye
echo "Finished copying the build files"