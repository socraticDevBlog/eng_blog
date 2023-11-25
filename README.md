[![Netlify Status](https://api.netlify.com/api/v1/badges/34eb6d14-1a02-4ca8-ac9c-0acd9efed86b/deploy-status)](https://app.netlify.com/sites/gallant-colden-aee440/deploys)

# eng_blog 🇬🇧

english version of the blog

[https://en.socratic.dev](https://en.socratic.dev)

## local installation and flow 💾

using [nvm - Node Version Manager](https://github.com/nvm-sh/nvm) is
recommended because this project is pretty much always behind latest LTS
NodeJS version ;)

if you insist on managing your own local NodeJS version, make sure you got the
right node version by checking file `.nvmrc`

```bash
git clone git@github.com:socraticDevBlog/eng_blog.git

cd eng_blog

nvm install

npm install

npm run build

npm run develop
```

ignore all the warnings and it should work -> http://localhost:8000/

## deploying to production 🚀

CI/CD flow is taken care of by [netlify](https://www.netlify.com/) fro free

netlify has a hook over this github repo master branch. it uses NodeJS version
configured in `.nvmrc` file, builds the website with configured npm command and
upload the artifacts to its CDN

On our end, we point our domain to this netlify via a cname. And, in order to
get automatically renewd TLS certs, we use netlify DNS servers.