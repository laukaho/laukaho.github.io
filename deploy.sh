npm run clear
npm run build


git pull origin gh-pages --rebase
git checkout gh-pages

cp -r ./build/* .
git add .
# Set up timestamp for commit message

# Configure Git identity
git config --local user.email "kaholau.dev@gmail.com"
git config --local user.name "laukaho"

# Commit and push changes
timestamp=$(date +"%Y%m%d-%H%M%S")
git commit -m "Publish page $timestamp"
git push origin gh-pages
git checkout master