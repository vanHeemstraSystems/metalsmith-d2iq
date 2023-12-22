# 200 - Requirements

Metalsmith runs on NodeJS > 10. Download & install NodeJs and NPM (NPM comes pre-bundled with Node): https://nodejs.org/en/download/.
If you plan to publish plugins, it is recommended that you use [nvm](https://github.com/nvm-sh/nvm#intro) or [nvs](https://github.com/jasongin/nvs#readme) (for Windows)

Add ```node_modules/.bin``` to the ```PATH``` environment variable if you’d like to use the Metalsmith CLI:

- on Windows, hit the Windows key and search for *Edit environment variables*, then add a ```node_modules\\.bin``` line to the ```PATH``` variable
- on Linux/Mac, add ```export PATH=node_modules/.bin;$PATH``` to your ```~/.bashrc``` or ```~/.bash_profile``` file, then ```source``` it.

Metalsmith builds are tested on both Linux & Windows systems and all [officially supported NodeJS LTS releases](https://nodejs.org/en/about/releases/).