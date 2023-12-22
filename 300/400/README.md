# 400 - Directory Structure

A typical directory structure for a metalsmith (static-site) project looks more or less like this:

```
repo
├── metalsmith.js
├── package.json
├── node_modules
├── build
├── layouts
│   ├── default.hbs
│   └── post.hbs
├── lib
│   └── sass
│   │   └── style.scss
│   ├── data
│   │   └── nav.json
│   └── plugins
│       └── local-metalsmith-plugin.js
└── src
    ├── about.md
    ├── index.md
    └── posts
        ├── first-post.md
        └── second-post.md
```

where:

- ```repo``` is your ```metalsmith.directory()``` — the root of the project, with all dependencies, config files, etc.
- ```src``` is your ```metalsmith.source()``` — it contains the *contents* that metalsmith needs to process and output to ```build```
- build is your metalsmith.destination() — it is created dynamically when you first run metalsmith.build
- ```lib``` is for all the rest (for example local metalsmith plugins, Sass styles that are processed outside of metalsmith and added to the build, or metadata that is manually ```require()```‘d)

…but Metalsmith gives you total freedom about how you want to structure your project, so feel free to restructure things as you see fit. Check out the [nodejs.org website](https://github.com/nodejs/nodejs.org) that is built with metalsmith for inspiration.