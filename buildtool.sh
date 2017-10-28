#!/usr/bin/env bash

echo "* Firefox Buildtool: Packer Script"

DES=build/krpatch.cinderella.girls
rm -rf $DES
mkdir -p $DES

echo "* Firefox Buildtool: Copy Files"

cp    icon.png                          $DES/
cp    popup.js                          $DES/
cp    popup.html                        $DES/
cp    manifest.json                     $DES/

cp -R images                            $DES/images
cp -R css                               $DES/css


set +v
echo "* Firefox Buildtool: Creating package..."
pushd $DES/ > /dev/null
zip ../krpatch.cinderella.girls.xpi -qr *
popd > /dev/null

echo "* Firefox Buildtool: Done."