const { hot } = require("react-hot-loader/root")

// prefer default export if available
const preferDefault = m => m && m.default || m


exports.components = {
  "component---src-templates-poet-template-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\templates\\poet-template.js"))),
  "component---cache-dev-404-page-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\.cache\\dev-404-page.js"))),
  "component---src-pages-404-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\pages\\404.js"))),
  "component---src-pages-developers-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\pages\\developers.js"))),
  "component---src-pages-index-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\pages\\index.js"))),
  "component---src-pages-poets-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\pages\\poets.js"))),
  "component---src-pages-poets-poet-js": hot(preferDefault(require("C:\\Git Projects\\RSS\\Culture-Portal\\src\\pages\\poets\\poet.js")))
}

