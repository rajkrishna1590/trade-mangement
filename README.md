# Welcome to Trade Management API!
 
## Prerequisite
1. bash terminal
2. docker
3. docker-compose
4. Free ports in machine [27017, 3000, 4000]

## Project Source
  git clone https://github.com/rajkrishna1590/trade-management.git
  
							OR
              
download and unzip https://github.com/rajkrishna1590/trade-management/archive/master.zip

## Steps to run in terminal
	$ cd trade-management
	$ bash run.sh
  
## Ensuring application is up
Open this link http://localhost:3000/api-docs/ in browser. 

This will provide API documentation [Swagger]. Refer: https://swagger.io/tools/swagger-ui/

**Use basic authentication token provided below for authentication purpose**
"Basic cmFqOnJhag=="

## To run test cases  in terminal
	$ docker exec -it trade-app sh test/testRunner.sh
	$ cd trade-management/.coverage
	$ ls -la
	This will list all the files of coverage report. to view the report, open the index.html file inside this folder in browser 
