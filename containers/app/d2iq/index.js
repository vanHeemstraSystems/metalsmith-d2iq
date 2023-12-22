// Get our requirements, installed by npm
const Metalsmith = require('metalsmith'),
    markdown = require('@metalsmith/markdown'),
    layouts = require('@metalsmith/layouts'),
    Utils = require("./core/utils");

// Run Metalsmith in the current directory.
// When the .build() method runs, this reads
// and strips the frontmatter from each of our
// source files and passes it on to the plugins.
Metalsmith(__dirname)
    // These are available in the layouts as js variables
    .metadata({
        url: "https://docs.d2iq.com",
        siteTitle: "D2iQ Docs",
        siteDescription:
            "Welcome to the documentation pages for D2iQ. Visit one of the product " +
            "pages to get started.",
        copyright: `&copy; ${new Date().getFullYear()} D2iQ, Inc. All rights reserved.`,
        env: process.env.NODE_ENV,
        dcosCNDocsLatest: "2.1",
        dcosDocsLatest: "2.2",
        dispatchDocsLatest: "1.4",
        kommanderDocsLatest: "2.2",
        konvoyDocsLatest: "2.2",
        kaptainDocsLatest: "2.0.0",
        Utils,
    })

    // Use @metalsmith/markdown to convert
    // our source files' content from markdown
    // to HTML fragments.
    .use(markdown())

    // Put the HTML fragments from the step above
    // into our template, using the Frontmatter
    // properties as template variables.
    .use(layouts())

    // And tell Metalsmith to fire it all off.
    .build(function (err, files) {
        if (err) { throw err; }
    });