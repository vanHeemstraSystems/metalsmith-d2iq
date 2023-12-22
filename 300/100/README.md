# 100 - Installation

First create a project folder somewhere and navigate to it:

```
$ mkdir containers/app/d2iq
$ cd containers/app/d2iq
```

Then install Metalsmith with any NodeJS package manager:

```
$ yarn add metalsmith
```

It is likely that you will want to install some plugins too:

```
$ yarn add @metalsmith/collections @metalsmith/markdown @metalsmith/permalinks @metalsmith/layouts
```

If you would like to use Typescript in your build file, be sure to install ```@types/metalsmith``` as well.

```
$ yarn add @types/metalsmith
```