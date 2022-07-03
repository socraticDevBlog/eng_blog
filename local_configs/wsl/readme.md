# caution

local development had become a nightmare on any machine.

on the macbook m1, some libraries (sharp) doesn't play well with the cpu architecture.

on WSL (linux subsystem for windows), we can hack it to deploy locally by removing library `node sass`.

these `package.json` files are to be used locally on WSL.

Leave the original `package` files located at root untouched.

## what's next

Keep on posting blog posts using WSL to edit them locally.

Either build a new blog codebase.  Or, update Gatsby and all its dependencies to the latest versions.