#!/bin/bash

pm2 start --name=api -i 2 ./api/api.js
