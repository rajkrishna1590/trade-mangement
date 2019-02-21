#!/usr/bin/env bash

# stop on error
set -e
# debug mode - uncomment to enable
# set -x

# Binaries we need
MOCHA="./node_modules/.bin/mocha"
NYC="./node_modules/.bin/nyc"

# Test Env variables
TEST_ENV="test/test.env"

# Export the test environment
source "$TEST_ENV"
export $(cut -d= -f1 "$TEST_ENV")

usage() {
        cat <<EOF
Usage: testRunner.sh [option] [value]
Runs mocha and generates coverage report
Without any options, all files inside ./test/ will run
Coverage report will be saved in ./.coverage

Options:
=======
  -f [filename] - tests only the file
  -m [module]   - run all the available functions
  -d            - attaches node debugger
  -h            - show this help message and exit

Examples:
========
  testRunner.sh -f test/models/cinder/cinderAPITest.js
  testRunner.sh -df test/models/ceph/cephAPITest.js
  testRunner.sh -f test/models/ceph/cephAPITest.js -f test/controllers/networks/routerControllerTest.js
  testRunner.sh -m controllers
  testRunner.sh -dm models
EOF
}

modules=()
files=()
files_for_report=()

while getopts ":dhm:f:o:" opt; do
    case "${opt}" in
        d)
            debug=true
            ;;
        o)
            OTHER_OPTS=$OPTARG
            ;;
        m)
            modules+=(${OPTARG})
            ;;
        f)
            files+=(${OPTARG})
            files_for_report+=($(echo $OPTARG | sed 's#\(test/\)\(.*\)\(Test.js\)#\2.js#'))
            ;;
        h)
            usage
            exit
            ;;
        *)
            echo "illegal option -$OPTARG"
            usage
            exit 1
            ;;
    esac
done
shift "$((OPTIND-1))"

#Run the test
if [[ ${#files[@]} != 0 ]];
then
    if [[ ${#files[@]} == 1 ]];
    then
        glob_pattern_report="${files_for_report[@]}"
        glob_pattern="${files[@]}"
    else
        glob_pattern_report={${files_for_report[@]}}
        glob_pattern={${files[@]}}
    fi
    glob_pattern_nyc="${glob_pattern_report// /,}"
    glob_pattern_mocha="${glob_pattern// /,}"
    MOCHA_CMD_ARGS="$glob_pattern_mocha"
elif [[ ${#modules[@]} != 0 ]];
then
    if [[ ${#modules[@]} == 1 ]];
    then
        glob_pattern="${modules[@]}"
    else
        glob_pattern={${modules[@]}}
    fi
    glob_pattern_nyc="${glob_pattern// /,}"
    glob_pattern_mocha="test/${glob_pattern// /,}"
    MOCHA_CMD_ARGS="--recursive $glob_pattern_mocha"

else
    MOCHA_CMD_ARGS="test --recursive"
fi

NYC_CMD_ARGS="--report-dir .coverage --reporter=html"

if [[ "$debug" == true ]];
then
    $MOCHA --inspect $MOCHA_CMD_ARGS
else
    $NYC $NYC_CMD_ARGS $MOCHA $MOCHA_CMD_ARGS
fi
