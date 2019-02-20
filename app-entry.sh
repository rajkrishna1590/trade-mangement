#!/bin/bash
hostip=$(ip route show | awk '/default/ {print $3}')
echo "{\"host\": \"$hostip\"}"  
#npm i
node main.js
tail -F -n0 /etc/hosts
