// prefer default export if available
const preferDefault = m => m && m.default || m

exports.components = {
  "component---cache-dev-404-page-js": () => import("dev-404-page.js" /* webpackChunkName: "component---cache-dev-404-page-js" */),
  "component---src-pages-404-js": () => import("../src/pages/404.js" /* webpackChunkName: "component---src-pages-404-js" */),
  "component---src-pages-index-js": () => import("../src/pages/index.js" /* webpackChunkName: "component---src-pages-index-js" */),
  "component---src-pages-library-js": () => import("../src/pages/library.js" /* webpackChunkName: "component---src-pages-library-js" */),
  "component---src-pages-page-js": () => import("../src/pages/page.js" /* webpackChunkName: "component---src-pages-page-js" */)
}

