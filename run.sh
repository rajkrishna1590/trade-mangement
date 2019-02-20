#!/bin/bash
echo -e "\e[32mClean up before rebuilding the trade app containers\e[0m"
docker-compose down 
echo -e "\e[32mClean up before rebuilding the trade app containers\e[0m"
#docker-compose build  
echo -e "\e[32mBringing up the trade app containers\e[0m"
docker-compose up -d