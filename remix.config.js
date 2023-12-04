/** @type {import('@remix-run/dev').AppConfig} */
const { flatRoutes } = require('remix-flat-routes')

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  routes: async defineRoutes => {
    return defineRoutes((route) => {
        route("/", "routes/_index/route.tsx", { index: true });
        route("rental", "root.tsx", () => {
          route("/", "routes/rental/_index.tsx", { index: true }); // Assuming there's a default rental page
          route(":id/attributes", "routes/rental/$id_.attributes.tsx");
          route(":id/availability-single", "routes/rental/$id_.avaliability_.single.tsx");
          route(":id/availability-type", "routes/rental/$id_.avaliability_.type.tsx");
          route(":id/availability", "routes/rental/$id_.avaliability.tsx");
          route(":id/images", "routes/rental/$id_.images.tsx");
          route(":id/location", "routes/rental/$id_.location.tsx");
          route(":id/notes", "routes/rental/$id_.notes.tsx");
          route(":id/price", "routes/rental/$id_.price.tsx");
          route(":id/receipt", "routes/rental/$id_.receipt.tsx");
          route(":id/type", "routes/rental/$id_.type.tsx");
        });
      });
    },
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  serverDependenciesToBundle: [
    'swiper',
    'swiper/react',
    'swiper/react/swiper-react.js',
    'swiper/modules',
    "ssr-window",
    "ssr-window/ssr-window.esm.js",
    "dom7",
  ],
  // appDirectory: "app",
  // assetsBuildDirectory: "public/build",
  // publicPath: "/build/",
  tailwind: true,
  serverModuleFormat: "cjs",
  future: {
    v2_dev: true,
    v2_errorBoundary: true,
    v2_headers: true,
    v2_meta: true,
    v2_normalizeFormMethod: true,
    v2_routeConvention: true,
  },
};
