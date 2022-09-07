git push:
  site/docs/.vitepress/config.ts  (remove base)

publish:
  npm config set registry https://registry.npmjs.org/
  after:
  npm config set registry https://registry.npmmirror.com/
