# 300 - The Content

## 100 - Creating HTML Fragments Using @metalsmith/markdown

Open up *src/index.md* in your editor of choice and let’s add some content. There are two parts to each source file: its **YAML Frontmatter** and its **Markdown content**. Frontmatter is used by Metalsmith by default. While you could override or replace it with plugins, if desired, we’re going to make use of it to set three properties of each page:

1. Setting the title of the page as ```title```.
2. Setting the description of the page, called ```description```.
3. Telling @metalsmith/layouts to use our *default.hbs* template file, which @metalsmith/layouts calls ```layout```.

Keep in mind that using markdown for your source files, while a popular use case and the point of our example, is just one of many options. The exact same series of steps could work for preprocessing different file types with a few different plugins. Additionally, note that, while the plugin we’re using for templating requires a property called ```layout``` to know which template to use, the ```title``` and ```description``` properties are *completely arbitrary*. We’re choosing to use those in our template, but they’re in no way required or defined by Metalsmith itself.

Here’s what that source file looks like as a result, with some *lorem ipsum* content and a sprinkling of markdown to see the conversion in action.

```
---
title: Example
description: This page is just an example.
layout: default.hbs
---

## Lorem ipsum

Dolor sit amet, consectetur __strong__ adipiscing elit. Morbi 
faucibus, *em* purus at gravida dictum, libero arcu convallis 
lacus, in commodo libero metus eu nisi. Nullam commodo, neque 
nec porta placerat, nisi est fermentum augue, vitae gravida 
[link](https://metalsmith.io) tellus sapien sit amet tellus. 
Aenean non diam orci. Proin quis elit turpis. Suspendisse non 
diam ipsum.

### Suspendisse nec ullamcorper odio.

- Vestibulum arcu mi, sodales non suscipit id.
- Sed ac sem sit amet arcu malesuada fermentum.
- Nunc sed.
```

containers/app/d2iq/src/index.md

That gives us the metadata properties and the content we’ll use in our template and some markdown to convert into an HTML fragment, leaving us ready to apply the layout. We’ve also got the ```layout``` property, which tells @metalsmith/layouts which template to apply from our *layouts/* directory.