# 500 - The Script

## 100 - Configuring MetalSmith to Use Our Plugins

Metalsmith API usage generally follows a common pattern:

1. You ```require()``` Metalsmith and your plugins.
2. Start up Metalsmith and tell it where to run (which is almost always just ```__dirname```, meaning the current directory).
3. You then ```.use()``` each of the plugins you need for your project, in order. This is where the proverbial magic happens.
4. Use Metalsmith’s ```.build()``` method to fire it all off and report any errors.

There are additional configuration options we could use and opportunities to add site-wide, global metadata if desired. For our purposes, we’re using default directory names and putting our metadata in our single source file, so our script is quite straightforward:

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

There is a wide range of plugins that you could choose to ```.use()``` for any given project. For this example, however, that’s all we need. If you needed further processing done on the source files, you could just continue to chain further ```.use()``` methods to add additional plugins, in order, and ultimately ending with ```.build()```.

Save it and you can now tell Node to run your new script.

```
$ node index
```

With that, each markdown file in ```src``` is used to generate a corresponding html file in ```build``` using our content, metadata, and template. Do you hear that noise? That’s the sweet, sweet sound of success.