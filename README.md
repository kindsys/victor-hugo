# Victor Hugo Turbo

**A (forked) Hugo boilerplate for creating truly epic websites**

This is fork of Victor Hugo, a boilerplate for using [Hugo](https://gohugo.io/) as a static site generator and [Webpack](https://webpack.js.org/) as your asset pipeline.

Victor Hugo setup to use [PostCSS](http://postcss.org/) and [Babel](https://babeljs.io/) for CSS and JavaScript compiling/transpiling.

Kind Systems has added Stimulus (https://stimulus.hotwire.dev/) and Turbo (https://turbo.hotwire.dev/) to support dynamic content with HTML over the wire without the weight of React or Gatsby.

This project is released under the [MIT license](LICENSE). Please make sure you understand its implications and guarantees.
## Usage

### :exclamation: Prerequisites

Next step, clone this repository and run:

```bash
yarn install
```

This will take some time and will install all packages necessary to run site and its tasks.

### :construction_worker: Development

While developing your website, use:

```bash
yarn start
```

or for developing your website with `hugo server --buildDrafts --buildFuture`, use:

```bash
yarn preview
```

Then visit http://localhost:3000/ _- or a new browser windows popped-up already -_ to preview your new website. Webpack Dev Server will automatically reload the SCSS/CSS/JS or refresh the whole page, when stylesheets or content changes.

### :package: Static build

To build a static version of the website inside the `/dist` folder, run:

```bash
yarn build
```

To get a preview of posts or articles not yet published, run:

```bash
yarn build:preview
```

See [package.json](package.json#L8) for all tasks.

## Structure

```
|--site                // Everything in here will be built with hugo
|  |--content          // Pages and collections - ask if you need extra pages
|  |--data             // YAML data files with any data for use in examples
|  |--layouts          // This is where all templates go
|  |  |--partials      // This is where includes live
|  |  |--index.html    // The index page
|  |--static           // Files in here ends up in the public folder
|--src                 // Files that will pass through the asset pipeline
|  |--css              // Webpack will bundle imported css separately
|  |--index.js         // index.js is the webpack entry for your css & js assets
```

## Basic Concepts

You can read more about Hugo's template language in their documentation here:

https://gohugo.io/templates/overview/

The most useful page there is the one about the available functions:

https://gohugo.io/templates/functions/

For assets that are completely static and don't need to go through the asset pipeline,
use the `site/static` folder. Images, font-files, etc, all go there.

Any images that you want run through webpack should be placed in the `./src/images` directory.

Files in the static folder end up in the web root. So a file called `site/static/favicon.ico`
will end up being available as `/favicon.ico` and so on...

The `src/index.js` file is the entrypoint for webpack and will be built to `/dist/main.js`

You can use **ES6** and use both relative imports or import libraries from npm.

Any CSS file imported into the `index.js` will be run through Webpack, compiled with [PostCSS Next](http://cssnext.io/), and
minified to `/dist/[name].[hash:5].css`. Import statements will be resolved as part of the build.

## Environment variables

To separate the development and production _- aka build -_ stages, all tasks run with a node environment variable named either `development` or `production`.

You can access the environment variable inside the theme files with `getenv "NODE_ENV"`. See the following example for a conditional statement:

    {{ if eq (getenv "NODE_ENV") "development" }}You're in development!{{ end }}

All tasks starting with _build_ set the environment variable to `production` - the other will set it to `development`.

## Deploying to Netlify

- Push your clone to your own GitHub repository.
- [Create a new site on Netlify](https://app.netlify.com/start) and link the repository.

Now Netlify will build and deploy your site whenever you push to git.

You can also click this button:

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/netlify/victor-hugo)

## Enjoy!! 😸
