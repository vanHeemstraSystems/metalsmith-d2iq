# 800 - Too Long; Didn't Read (TL;DR)

In the steps described above, we have set up the project and its dependencies in a folder called ‘d2iq’ using the command line:

```
$ mkdir containers/app/d2iq
$ cd containers/app/d2iq
$ npm init -y
$ npm install --save-dev metalsmith @metalsmith/markdown @metalsmith/layouts @metalsmith/collections @metalsmith/permalinks jstransformer-handlebars @types/metalsmith
$ touch index.js
$ mkdir layouts
$ touch layouts/default.hbs
$ mkdir src
$ touch src/index.md
```

We created a single source file, with YAML frontmatter defining some metadata and which template to use, followed by the file’s markdown-formatted content:

```
---
title: Example
description: This page is just an example.
layout: default.hbs
---

## Lorem ipsum

Dolor sit amet, consectetur __strong__ adipiscing elit. Morbi faucibus, *em* purus at gravida dictum, libero arcu convallis lacus, in commodo libero metus eu nisi. Nullam commodo, neque nec porta placerat, nisi est fermentum augue, [link](https://metalsmith.io) vitae gravida tellus sapien sit amet tellus. Aenean non diam orci. Proin quis elit turpis. Suspendisse non diam ipsum.

### Suspendisse nec ullamcorper odio.

- Vestibulum arcu mi, sodales non suscipit id, ultrices ut massa.
- Sed ac sem sit amet arcu malesuada fermentum.
- Nunc sed.
```

containers/app/d2iq/src/index.md

We made our basic handlebars template to change our HTML fragment into a complete HTML page, with ```contents``` as the property Metalsmith uses to store the contents of the source file and our ```title``` and ```description``` metadata from the source file available as template variables:

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
    <meta name="description" content="{{ description }}" />
</head>
<body>

    <h1>{{{ title }}}</h1>
    {{{ contents }}}

</body>
</html>
```

containers/app/d2iq/layouts/default.hbs

We created the script to configure Metalsmith to assemble our source files using our @metalsmith/markdown and @metalsmith/layouts plugins:

```
// Get our requirements, installed by npm
const Metalsmith  = require('metalsmith'),
    markdown    = require('@metalsmith/markdown'),
    layouts     = require('@metalsmith/layouts');

// Run Metalsmith in the current directory.
// When the .build() method runs, this reads
// and strips the frontmatter from each of our
// source files and passes it on to the plugins.
Metalsmith(__dirname)

    // Use @metalsmith/markdown to convert
    // our source files' content from markdown
    // to HTML fragments.
    .use(markdown())

    // Put the HTML fragments from the step above
    // into our template, using the Frontmatter
    // properties as template variables.
    .use(layouts())

    // And tell Metalsmith to fire it all off.
    .build(function(err, files) {
        if (err) { throw err; }
    });
```

containers/app/d2iq/index.js

With the script in place, we used **Node to run it** with a single command:

```
$ node index
```

After doing so, our source file’s content and metadata from *src/index.md* generated the corresponding html file, found at *build/index.html*. That’s a working API implementation.

Then, to demonstrate a version using the CLI approach, we created a *metalsmith.json* file with the same configuration.

```
{
    "plugins": [
        { "@metalsmith/markdown": {} },
        { "@metalsmith/layouts": {} }
    ]
}
```

containers/app/d2iq/metalsmith.json

And to run the CLI version using *metalsmith.json* as the configuration, we ran the Metalsmith command already installed by npm, using ```npx``` to execute the copy in *node_modules/.bin*.

```
$ npx metalsmith
```

… Which generates the exact same file in the build directory when you run it. If you prefer the CLI approach, read about [installing Metalsmith globally](https://metalsmith.io/step-by-step/#optionally-installing-metalsmith-globally), above, to make your life easier.