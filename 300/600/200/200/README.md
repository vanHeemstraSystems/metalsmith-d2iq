# 200 - Getting Started

Let’s open a command prompt and dive in. We’ll make a directory, ```cd``` into that directory, and tell npm to create a *package.json* file for us so we can install Metalsmith and its plugins.

```
$ mkdir containers/app/d2iq
$ cd containers/app/d2iq
$ npm init -y
```

```npm init``` will normally ask you a few questions about what to call your project, versioning, licensing, etc. In this case, we’re using the ```-y``` flag, which just accepts all the defaults. You’ll end up with a *package.json* file that defines a project called “d2iq” whose main file is *index.js*, which is the relevant info for this example. Now that we’ve initialized npm, we can use it to install Metalsmith and the plugins which we need for our project. Additionally, @metalsmith/layouts lets you define and install your choice of templating engine, so we’ll also install Handlebars as well.

```
$ npm install --save-dev metalsmith @metalsmith/markdown @metalsmith/layouts @metalsmith/collections @metalsmith/permalinks jstransformer-handlebars @types/metalsmith
```

That line tells npm to go fetch the current stable versions of our requirements, place them in the *node_modules/* directory, and ```--save-dev``` saves references to these modules as development dependencies in the *package.json* file.

Your ```package.json``` may like like the following:

```
{
  "name": "d2iq",
  "version": "1.0.0",
  "main": "index.js",
  "dependencies": {
    "anymatch": "^3.1.3",
    "argparse": "^1.0.10",
    "asap": "^2.0.6",
    "binary-extensions": "^2.2.0",
    "braces": "^3.0.2",
    "chokidar": "^3.5.3",
    "co": "^3.1.0",
    "commander": "^10.0.1",
    "debug": "^4.3.4",
    "dlv": "^1.1.3",
    "dset": "^3.1.3",
    "esprima": "^4.0.1",
    "extend-shallow": "^2.0.1",
    "fill-range": "^7.0.1",
    "glob-parent": "^5.1.2",
    "gray-matter": "^4.0.3",
    "handlebars": "^4.7.8",
    "inputformat-to-jstransformer": "^1.4.0",
    "is-binary-path": "^2.1.0",
    "is-extendable": "^0.1.1",
    "is-extglob": "^2.1.1",
    "is-glob": "^4.0.3",
    "is-number": "^7.0.0",
    "is-promise": "^2.2.2",
    "is-utf8": "^0.2.1",
    "js-yaml": "^3.14.1",
    "jstransformer": "^1.0.0",
    "kind-of": "^6.0.3",
    "lodash.clonedeepwith": "^4.5.0",
    "lodash.get": "^4.4.2",
    "marked": "^4.3.0",
    "micromatch": "^4.0.5",
    "minimist": "^1.2.8",
    "ms": "^2.1.2",
    "neo-async": "^2.6.2",
    "normalize-path": "^3.0.0",
    "picomatch": "^2.3.1",
    "promise": "^7.3.1",
    "read-metadata": "^1.0.0",
    "readdirp": "^3.6.0",
    "regexparam": "^3.0.0",
    "require-one": "^1.0.3",
    "section-matter": "^1.0.0",
    "slugify": "^1.6.6",
    "source-map": "^0.6.1",
    "sprintf-js": "^1.0.3",
    "stat-mode": "^1.0.0",
    "strip-bom-string": "^1.0.0",
    "to-regex-range": "^5.0.1",
    "uglify-js": "^3.17.4",
    "ware": "^1.3.0",
    "wordwrap": "^1.0.0",
    "wrap-fn": "^0.1.5",
    "yaml-js": "^0.0.8"
  },
  "devDependencies": {
    "@metalsmith/collections": "^1.3.0",
    "@metalsmith/layouts": "^2.7.0",
    "@metalsmith/markdown": "^1.10.0",
    "@metalsmith/permalinks": "^3.0.0",
    "@types/metalsmith": "^2.6.0",
    "jstransformer-handlebars": "^1.2.0",
    "metalsmith": "^2.6.2"
  },
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  },
  "keywords": [],
  "author": "",
  "license": "ISC",
  "description": ""
}
```
containers/app/d2qi/package.json

When initializing our project folder, ```npm init``` creates an entry point and the default is **index.js**. That’ll be our node script, so let’s create a blank file for now. We’ll also do the same for our template (which we’ll call *layouts/default.hbs*) and we’ll need to set up our source directory with at least one markdown file in it (let’s use the default *src/* folder and add our single page as *src/index.md*).

```
$ touch index.js
$ mkdir layouts
$ touch layouts/default.hbs
$ mkdir src
$ touch src/index.md
```

Ok, that’s our setup and we have now:

1. installed our requirements with npm using *package.json* and *node_modules/*,
2. set up our script as *index.js*,
3. created our *layouts/default.hbs* template, and
4. made our first source file at *src/index.md*.

Keep in mind that this could all be prepared for you in advance with a little bit of project scaffolding - we’re just starting from scratch for the sake of this example. All we have to do now is create some content, create a template, and write the script itself.