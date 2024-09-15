npm run clear
npm run build
git checkout gh-pages
cp -r ./build/* .
git add .
timestamp=date +"%Y%m%d-%H%M%S"
git commit -m "Publish page $timestamp"
git push origin
git checkout master