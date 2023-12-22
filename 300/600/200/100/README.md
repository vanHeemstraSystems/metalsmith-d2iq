# 100 - The Files and Folders that make up a Project

First, we’ll need a project folder, which we’ll just call **d2iq**. This will contain everything we need to run Metalsmith and create our HTML. In this folder, we’re going to make the following files:

1. a **source directory**, *src/* by default, with our source Markdown-formatted content;
2. a **layouts** folder with a single Handlebars template; and
3. our **node script** to configure and run Metalsmith itself.

We’ll be using npm (Node’s built-in package manager) to install [Metalsmith](https://github.com/metalsmith/metalsmith) and two plugins to accomplish our two tasks: [@metalsmith/markdown](https://github.com/metalsmith/markdown) will convert our markdown files into HTML fragments while [@metalsmith/layouts](https://github.com/metalsmith/layouts) will put our HTML fragments into a Handlebars template. Handlebars is a *choice* for this particular example, rather than a requirement. You can use whatever templating engine you prefer.

The installation and build processes will create a few more items in our project folder, automatically adding them for us. In addition to those we’ve created above, we’ll eventually also have:

1. a **package.json** file and a **package-lock.json** file which npm uses to keep track of our project information;
2. a **node_modules** folder where npm installs Metalsmith and its plugins; and
3. a **destination folder**, called *build/*, where Metalsmith generates the results.

We’ll never actually touch or change any of those generated files directly. npm will create and update *package.json* and *node_modules/* for us during the initial setup while the entire purpose of this example is to get Metalsmith to generate the build folder.