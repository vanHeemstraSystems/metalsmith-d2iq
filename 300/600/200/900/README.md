# 900 - Using Jade files (*.pug)

**NOTE**: Pug was formerly known as Jade.

Instead of using handlebars as the layout standard, if we want to use jade instead, we'll make use of [MetalSmith plugin to convert jade files](https://github.com/ahmadnassri/node-metalsmith-pug).

## 100 - Installation

```
$ npm install --savedev metalsmith-pug pug
```

## 200 - Usage

I recommend using an optimized build matching your Node.js environment version, otherwise, the standard require would work just fine with any version of Node >= v4.0 .

```
/*
 * Node 7
 */
const metalsmith-jade = require('metalsmith-jade/lib/node7')
```

## 300 - API

Pass ```options``` to the pug plugin and pass it to Metalsmith with the ```use``` method:

```
import Metalsmith from 'metalsmith'
import pug from 'metalsmith-pug'

const options = {
  pretty: false,

  locals: {
    postName: 'good post name'
  },

  filters: {
    foo: block => block.replace('foo', 'bar')
  }
}

new Metalsmith(__dirname)
  .use(pug(options))
```

## 400 - CLI

You can also use the plugin with the Metalsmith CLI by adding a key to your ```metalsmith.json``` file:

```
{
  "plugins": {
    "metalsmith-pug": {
      "pretty": false
    }
  }
}
```

## 500 - Options

All options are passed directly to pug. If ```options``` has a ```locals``` key, that will be passed along to pug.

Any of the options parameters for pug with the additional plugin specific properties below:

| Name | Type | Required | Default | Details |
| -- | -- | -- | -- | -- |
| useMetadata | Boolean | No | false | Expose Melatsmith's global metadata to the pug template |
| locals | Object | No | {} | Pass additional locals to the template |
| filters | Object | No | {} | Register functions to be used as template filters |