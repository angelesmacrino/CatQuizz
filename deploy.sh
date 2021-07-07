#!/usr/bin/env sh

set -e 

npm run build

cd dist

git init
git add -A
git commit -m "run build"
git push -f https://github.com/angelesmacrino/CatQuizz.git master:gh-pages

cd -