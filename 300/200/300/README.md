# 300 - Glob Patterns

Metalsmith and its plugins make extensive use of glob patterns to target specific files (usually through the ```pattern``` option). A [glob](https://en.wikipedia.org/wiki/Glob_(programming)) is a type of string pattern syntax that is commonly and conveniently used to match files by path with support for *globstar* wildcards ```*```. Chances are you are already using glob patterns in ``````.gitignore``` files, with the Linux/Mac or ```git``` terminal commands. Here are a few examples of how you can match with glob patterns:

- Matching all files (the double globstar is *recursive*): see it [in action](https://www.digitalocean.com/community/tools/glob?comments=false&glob=%2A%2A%2F%2A&tests=blog%2Findex.md&tests=blog%2Fposts%2Fpost-1.md&tests=blog%2Fposts%2Fpost-2.md&tests=blog%2Fpost-outside.md&tests=services%2Fwebdesign%2Findex.mdservices%2Femail%2Findex.html&tests=about.md&tests=css%2Fstyle.css&tests=js%2Fsite.js&tests=index.md&tests=404.md)

```
**/*
```

- Matching all files at the root of a directory with a ```.html``` extension: see it [in action](https://www.digitalocean.com/community/tools/glob?comments=false&glob=%2A.html&tests=blog%2Findex.md&tests=blog%2Fposts%2Fpost-1.md&tests=blog%2Fposts%2Fpost-2.md&tests=blog%2Fpost-outside.md&tests=services%2Fwebdesign%2Findex.mdservices%2Femail%2Findex.html&tests=about.md&tests=css%2Fstyle.css&tests=js%2Fsite.js&tests=index.md&tests=404.md)

```
*.html
```

- Matching all markdown files starting with ```post-``` under the ```blog/posts``` folder: see it [in action](https://www.digitalocean.com/community/tools/glob?comments=false&glob=blog%2Fposts%2Fpost-%2A.md&tests=blog%2Findex.md&tests=blog%2Fposts%2Fpost-1.md&tests=blog%2Fposts%2Fpost-2.md&tests=blog%2Fpost-outside.md&tests=services%2Fwebdesign%2Findex.mdservices%2Femail%2Findex.html&tests=about.md&tests=css%2Fstyle.css&tests=js%2Fsite.js&tests=index.md&tests=404.md)

```
blog/posts/post-*.md
```

- Matching either … or …: see it [in action](https://www.digitalocean.com/community/tools/glob?comments=false&glob=%7Bservices%2F**,blog%7D%2Findex.md&tests=blog%2Findex.md&tests=blog%2Fposts%2Fpost-1.md&tests=blog%2Fposts%2Fpost-2.md&tests=blog%2Fpost-outside.md&tests=services%2Fwebdesign%2Findex.mdservices%2Femail%2Findex.html&tests=about.md&tests=css%2Fstyle.css&tests=js%2Fsite.js&tests=index.md&tests=404.md)

```
{services/**,blog}/index.md
```

- Matching all except markdown files (negated match): see it [in action](https://www.digitalocean.com/community/tools/glob?comments=false&glob=!**%2F*.md&tests=blog%2Findex.md&tests=blog%2Fposts%2Fpost-1.md&tests=blog%2Fposts%2Fpost-2.md&tests=blog%2Fpost-outside.md&tests=services%2Fwebdesign%2Findex.mdservices%2Femail%2Findex.html&tests=about.md&tests=css%2Fstyle.css&tests=js%2Fsite.js&tests=index.md&tests=404.md)

```
!**/*.md
```

You can always use DigitalOcean’s handy [Glob tool](https://www.digitalocean.com/community/tools/glob) or [globster.xyz](https://globster.xyz/) to test your glob patterns.