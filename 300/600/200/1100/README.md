# 1100 - Add Configuration to index.js

## 100 - Add MetaData

Extend the configuration of Metalsmith with ```metadata```:

```
// Local Plugins
const Utils = require("./core/utils");
...
Metalsmith(__dirname)
    ...
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
    ...
```

containers/app/d2iq/index.js

In addition, create the referenced ```core/utils.js``` folder and file:

```
// Add more logic here later
module.exports = {};
```
containers/app/d2iq/core/utils.js