# 400 - The Plugin Chain

We believe that understanding the internal representation of files as JavaScript objects is really key to fully grasp the concept of Metalsmith. To understand this better, we follow the evolution of a file at each step of the build process (between each ```use``` statement). We are also using the ```writemetadata()``` plugin, which writes the ```{key: value}``` pairs excerpted from the [File](https://metalsmith.io/api/#File) objects representing the files, to the filesystem as ```.json``` files. You can then view the ```.json``` files to find out how files are represented internally in Metalsmith.

```
Metalsmith(__dirname)            
  .source('src')      
  .destination('build')   
  .use(markdown())          
  .use(layouts())
  .use(writemetadata({            // write the JS object
    pattern: ['**/*'],            // for each file into .json
    ignorekeys: ['next', 'previous'],
    bufferencoding: 'utf8'        // also put 'content' into .json
  }))
  .build(function(err) {         
    if (err) throw err;          
  });
```

API: metalsmith.js

```
{
  "source": "src",
  "destination": "build",
  "plugins": [
    { "markdown": true },
    { "layouts": true },
    { "writemetadata": {
      "pattern": ["**/*"],
      "ignorekeys": ["next", "previous"],
      "bufferencoding": "utf8"
    } }
  ]
}
```

CLI: metalsmith.js

In the example above, after applying ```.use(markdown())``` the initial representation of ```my-file.md``` becomes ```my-file.html```. The markdown plugin *changes the file extension* and *converts the contents to HTML*.

```
{
  'relative_to_sourcepath/my-file.html': {
    title: 'A Catchy Title',
    draft: false,
    contents: '<p>An unfinished article...</p>',
    ...
  }
}
```

After applying ```.use(permalinks())``` the file is *renamed to ```original-name/index.html```* and a ```path``` property is added to the file’s metadata:

```
{
  'relative_to_sourcepath/my-file/index.html': {
    title: 'A Catchy Title',
    draft: false,
    contents: '<p>An unfinished article...</p>',
    path: 'myfile',
    ...
  }
}
```

Assuming we have defined a very simple nunjucks layout file in a separate layouts folder…

```
<!doctype html>
<html>
<head>
  <title>{{ title }}</title>
</head>
<body>
  {{ contents | safe }}
</body>
</html>
```

./layouts/layout.njk

… after applying ```.use(layouts())``` in our Metalsmith chain our JavaScript object becomes:

```
{
  'relative_to_sourcepath/my-file/index.html': {
    title: 'A Catchy Title',
    draft: false,
    contents: `<!doctype html><html><head>
               <title>A Catchy Title</title></head><body>
               <p>An unfinished article...</p>
               </body></html>`,
    path: 'myfile',
    ...      
  }
}
```

Finally when the ```.build(function(err))``` is performed our JavaScript object is written to ```relative_to_destpath/myfile/index.html```.