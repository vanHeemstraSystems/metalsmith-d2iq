# 600 - CLI Usage

## 100 - An Alternative Way to Get the Same Results

The node script created above is an example of using the Metalsmith API and creating a *code-based* implementation. There’s a second example which works based upon *configuration and convention*. When you use the CLI approach, you create a configuration file, called **metalsmith.json** which contains all the configuration options for Metalsmith and identifies the plugins, the order in which they run, and any additional plugin configuration.

If using the CLI approach, you no longer need our *index.js* file in your project. Instead, you need to create a **metalsmith.json** file to provide the same information to Metalsmith. In our example, here’s what it would look like:

```
{
    "plugins": [
        { "@metalsmith/markdown": {} },
        { "@metalsmith/layouts": {} }
    ]
}
```
 containers/app/d2iq/metalsmith.json

Note that we don’t have to set up our requirements or use ```.build()```. For our simple example, we just tell Metalsmith to use @metalsmith/markdown and then run @metalsmith/layouts with our configuration options. With this one-time setup, we can run Metalsmith at any time from the command line using the ```metalsmith``` command.

If you’d like to use the local copy we’ve already installed, you can use ```npx``` to run the command (npx will execute the corresponding command from ```node_modules/.bin/```).

```
$ npx metalsmith
```

Once that runs, you will get the exact same results in the build directory. In fact, it helps to completely delete the entire build directory, just so you can see and confirm that it ran.

If you’d rather use the simpler, configuration-based CLI approach, you can safely discard *index.js*. It’s no longer in use and the CLI approach always reads *metalsmith.json* instead. Similarly, if you prefer the more expressive, code-based API approach, then you can discard *metalsmith.json*. Either method builds the exact same files in the ```build``` directory and you can run it whichever way you’d prefer.

## 200 - Optionally Installing MetalSmith Globally

Most often people regularly using the CLI approach will install Metalsmith *globally*. That means you can use the ```metalsmith``` command wherever you’d like and it’ll look for a *metalsmith.json* file in the current directory and use that. If you would like to install it globally, you can do so with npm. Note that this *will* remain installed even if you delete the project folder.

```
$ npm install -g metalsmith
```

If installed globally, then running metalsmith in your current directory—or any current directory with its own *metalsmith.json* file—is a bit simpler:

```
$ metalsmith
```