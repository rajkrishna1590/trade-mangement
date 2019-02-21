#!/bin/bash

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

MOCHA_CMD_ARGS="test --recursive"


NYC_CMD_ARGS="--report-dir .coverage --reporter=html"

if [[ "$debug" == true ]];
then
    $MOCHA --inspect $MOCHA_CMD_ARGS
else
    $NYC $NYC_CMD_ARGS $MOCHA $MOCHA_CMD_ARGS
fi
