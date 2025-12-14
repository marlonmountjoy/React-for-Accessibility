# on main
git checkout main
npm run build
mkdir -p ../React-for-Accessibility-build
cp -R dist ../React-for-Accessibility-build

# deploy to gh-pages
git checkout gh-pages
rm -rf *
cp -a ../React-for-Accessibility-build/dist/. .
git add .
git commit -m "Deploy latest build"
git push

# back to dev
git checkout main
rm -rf ../React-for-Accessibility-build
