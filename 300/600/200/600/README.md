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





MORE ...