# 200 - Front Matter

To attach metadata to a JS [File](https://metalsmith.io/api/#File) object, metalsmith reads front matter. *Front matter* is a term borrowed from the publishing industry meaning metadata about a written work. In Metalsmith this is a [YAML](https://linuxhandbook.com/yaml-basics/) document section (delineated by ```---```) containing metadata (*matter*) at the top (*front*) of a file (commonly, markdown). Metalsmith will recognize and read the front matter of a file and add it as metadata to the JS file representation when you run the build. Here is a typical example of an ```index.md``` file with YAML front-matter. If you don’t like the YAML syntax you can use JSON front matter as well.

```
---
title: Hello World
keywords:
  - hello
  - world
draft: false
---
Welcome to my blog
```

The front-matter will be parsed by Metalsmith as:

```
{
  title: 'Hello World',
  keywords: ['hello','world'],
  draft: false,
  contents: <Buffer>,
  mode: '0644',
  stats: { ... }
}
```

When the front matter is read into javascript, we refer to it as *file metadata*.

## 100 - Multi-line Strings

A common requirement is to write multi-line strings in YAML, either for readability or for output. There are a lot of ways to write [multiline strings in YAML](https://stackoverflow.com/questions/3790454/how-do-i-break-a-string-in-yaml-over-multiple-lines). Examples of the two most common ones are shown here:

- Using the greater than sign > (removing line breaks)

```
description: >
  This is a long text string,
  but we actually only want the line breaks for readability in the source.
  The line breaks will be removed in the output.
```

- Using the pipe sign | (preserving line breaks)

```
description: |
  This is a long text string.
  It should read like a poem
  So we want to preserve the line breaks.
```