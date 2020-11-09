#!/bin/bash

set -e

SPACE_NAME=brakeone
BACKUP_NAME=$(date +%y%m%d_%H%M%S).gz
DB=BrakeOne

date
echo "Backing up MongoDB database to DigitalOcean Space: $SPACE_NAME"

echo "Dumping MongoDB $DB database to compressed archive"
mongodump -h localhost --port 18509 --username BrakeOneService --password bmnqdQUObC4AS11i --authenticationDatabase $DB -d $DB --archive=$HOME/backup/tmp_dump.gz --gzip

echo "Copying compressed archive to DigitalOcean Space: $SPACE_NAME"
/usr/local/bin/s3cmd put $HOME/backup/tmp_dump.gz s3://$SPACE_NAME/$BACKUP_NAME

echo "Cleaning up compressed archive"
rm $HOME/backup/tmp_dump.gz

echo 'Backup complete!'