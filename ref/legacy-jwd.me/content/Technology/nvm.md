# node version manger

Windows install is of course more of a nightmare than every linux disto or mac so follow along here: https://learn.microsoft.com/en-us/windows/dev-environment/javascript/nodejs-on-windows

It will make your life easy when managing node versions. Useful commands whence installed...


```sh
# (either) list installed node versions 
nvm ls
nvm list

# (either) see what's available
nvm ls available
nvm list available

# install the latest release or specific version (useful for lts)
nvm install latest
nvm install 20.14.0

# switch node versions (number or latest)
nvm use latest
nvm use 20.14.0
```
