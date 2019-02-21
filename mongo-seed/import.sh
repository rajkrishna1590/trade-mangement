#! /bin/bash
sleep 30
mongoimport --username=trade --password=trade123 --authenticationDatabase=admin --db=trade --collection=user --type=json --file=/mongo-seed/user.json --jsonArray
mongoimport --username=trade --password=trade123 --authenticationDatabase=admin --db=trade --collection=stock --type=json --file=/mongo-seed/stock.json --jsonArray