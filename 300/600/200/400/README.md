# 400 - The Template

## 100 - Turning HTML Fragments and Metadata into complete HTML Files

We’re not going to create anything particularly fancy with our layout. We will, however, be using a few variables in our template. These variables are the same metadata properties we created in our frontmatter, above. Here’s the code for a basic template:

```
<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <title>{{ title }}</title>
    <meta name="description" content="{{ description }}" />
</head>
<body>

    <h1>{{{ title }}}</h1>
    {{{ contents }}}

</body>
</html>
```

containers/app/d2iq/layouts/default.hbs

Note that we’re using 3 variables: ```title```, ```description```, and ```contents```. While we defined title and description ourselves in our frontmatter, **contents** is where Metalsmith puts the contents of our source file.

Also note the double and triple braces. Double braces escape any HTML and result in plain text. The ```<title>``` element in the ```<head>``` can’t have other elements nested inside of it, so we’re just using double braces around ```title```. By the time the ```contents``` variable gets to our template, on the other hand, it is a fragment of perfectly valid, usable HTML, so we drop it into our template as-is, using triple braces.