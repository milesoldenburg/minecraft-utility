#!/bin/sh

# Run r.js optimzer
~/node_modules/requirejs/bin/r.js -o www-dev/app.build.js

# Remove templates from build
rm -r www/templates
rm www/app.build.js
rm www/build.txt

# Remove source recipes file
rm www/js/data/recipes.js

# Prepare cordova
cordova prepare

if [[ $# -eq 1 && $1 == "-b" ]]; then
    cordova build
fi
