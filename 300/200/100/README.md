# 100 - Files

Everyone has worked with files before. They have a name, a path, an extension, contents and metadata (like the last modified date). Metalsmith represents every file in the source directory as a javascript [File](https://metalsmith.io/api/#File) object. For instance,

```src/post/my-file.md:```

```
---
title: A Catchy Title
draft: false
---

An unfinished article...
```

... becomes

```
{
  'post/my-file.md': {
    title: 'A Catchy Title',
    draft: false,
    contents: 'An unfinished article...',
    mode: '0664',
    stats: {
      /* keys with information on the file */
    }    
  }
}
```

…where the content of the file is always mapped to the property value of ```contents```. 

For illustration purposes only we display the value of ```contents``` as a string. Technically, the property value of ```contents``` is mapped as a [NodeJS ```Buffer```](https://nodejs.org/api/buffer.html) , which can also handle binary data (for images, PDF’s, etc). ```mode``` contains the file [permission bit](https://en.wikipedia.org/wiki/File-system_permissions#Numeric_notation) and ```stats``` has more technical information on the file such as ```size``` or ```birthtime```. The file is also parsed for [YAML front matter](https://metalsmith.io/docs/getting-started/#front-matter), which is merged into the [File](https://metalsmith.io/api/#File) object. Thus, we finally have a javascript [Files](https://metalsmith.io/api/#Files) object of objects.

```
{
  'relative_to_sourcepath/file1.md': {
    title: 'A Catchy Title',
    draft: false,
    contents: 'An unfinished article...',
    mode: '0664',
    stats: {
      /* keys with information on the file */
    }    
  },
  'relative_to_sourcepath/file2.md': {
    title: 'An Even Better Title',
    draft: false,
    contents: 'One more unfinished article...',
    mode: '0664',
    stats: {
      /* keys with information on the file */
    }    
  }
}
```

Plugins can then manipulate the javascript [File](https://metalsmith.io/api/#File) objects representing the original files however they want, and [writing a plugin](https://metalsmith.io/docs/writing-plugins) is super simple.




