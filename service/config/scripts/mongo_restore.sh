#!/bin/bash

SPACE_NAME=brakeone
BACKUP_DATE=190411_022305
DB=BrakeOne

echo "Retreiving Back up MongoDB database from DigitalOcean Space: $SPACE_NAME"
s3cmd get s3://$SPACE_NAME/$BACKUP_DATE.gz

echo "Starting mongorestore from $DB"
mongorestore --gzip --archive=$BACKUP_DATE.gz -h localhost --port 18509 --username BrakeOneService --password bmnqdQUObC4AS11i --authenticationDatabase $DB -d $DB

rm ./$BACKUP_DATE.gz

echo 'Restore complete!'