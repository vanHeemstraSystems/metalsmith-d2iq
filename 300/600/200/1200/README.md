# 1200 - Create layouts for Jade/Pug

## 100 - Create layout.pug

```
- var { lang } = Utils.getPathInfo(path)

doctype html
html(lang='en')
  head
    include partials/head.pug
  body
    div(class='layout')
      include partials/header/header.pug
      include partials/sidebar.pug
      div(role='main', class='layout__content')
        include partials/content.pug
    include partials/scripts.pug
```

containers/app/d2iq/layouts/layout.pug

In addition, create all referenced files also.


**TIP**: Checkout the huge list of plugins for MetalSmith at https://metalsmith.io/plugins/


MORE ...