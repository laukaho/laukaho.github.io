npm run clear
npm run build
git checkout -b gh-pages || git checkout gh-pages
git pull origin gh-pages --rebase

cp -r ./build/* .
git add .
# Set up timestamp for commit message
timestamp=$(date +"%Y%m%d-%H%M%S")

# Configure Git identity
git config --local user.email "kaholau.dev@gmail.com"
git config --local user.name "automation"

# Commit and push changes
git commit -m "Publish page $timestamp"
git push origin gh-pages
git checkout master