#!/bin/sh

rm -rf node_modules .expo android ios
pnpm store prune --force
pnpm i
rm -fr $TMPDIR/haste-map-*
rm -rf $TMPDIR/metro-cache
pnpm expo prebuild --platform android
pnpm expo start --clear --dev-client
pnpm expo run:android