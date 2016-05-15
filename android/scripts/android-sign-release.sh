#!/bin/bash

PKG='../app/build/outputs/apk/app-release-unsigned.apk'
KEYSTORE='fullstacknights.keystore'
ALIAS='fullstacknights'
OUTPUT="$HOME/Desktop/FullstackNights.apk"

# Sign
jarsigner -verbose -sigalg SHA1withRSA -digestalg SHA1 -keystore $KEYSTORE $PKG $ALIAS

# Zipalign
~/Library/Android/sdk/build-tools/22.0.1/zipalign -v 4 $PKG $OUTPUT
