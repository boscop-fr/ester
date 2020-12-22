# Ester, the CSS reset

Ester is a minimalist CSS reset, designed to be unobtrusive
while providing a solid starting point.

It can be used as a standalone stylesheet or imported into
Sass projects.

## Usage

### With a CDN

Import the reset from either HTML or CSS, before any other styles:

```html
<link
  rel="stylesheet"
  href="https://unpkg.com/@empreinte-digitale@ester/css/reset.min.css"
/>
```

```css
@import 'https://unpkg.com/@empreinte-digitale/ester/css/reset.min.css';
```

### With a package manager

#### Installation

```sh
npm install @empreinte-digitale/ester
# or
yarn add @empreinte-digitale/ester
```

#### Sass

Many third-party tools allow you to import Sass stylesheets
from node modules into your projet using a simple syntax:

```sass
@import '~@empreinte-digitale/ester'
```

See [webpack's sass-loader](https://webpack.js.org/loaders/sass-loader/#resolving-import-at-rules)
or [node-sass-importer](https://github.com/FlyingDR/node-sass-importer#importing-of-third-party-libraries)
for example.

#### Standalone CSS

As with the CDN above, you can import the stylesheet from
either HTML or CSS:

```html
<link
  rel="stylesheet"
  href="/path/to/@empreinte-digitale/ester/css/reset.css"
/>
```

```css
@import '/path/to/@empreinte-digitale/ester/css/reset.min.css';
```

## Development

Start compilation in watch mode:

```sh
npm start
```

Then open `./test/index.html` to try out the styles.

## Publication

```sh
npm run build
npm publish
```

## Credits

Ester is maintained by [<span lang="fr">Empreinte Digitale</span> (french)](http://empreintedigitale.fr).
