/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/", "routes/index.tsx", { index: true });

      route("/cookies", "routes/cookies.tsx");
      route("/faq", "routes/faq.tsx");
      route("/handelsbetingelser", "routes/handelsbetingelser.tsx");
      route("/kommunale-priser", "routes/kommunale-priser.tsx");
      route("/kontakt", "routes/kontakt.tsx");
      route("/leje", "routes/leje.tsx");
      route("/logout", "routes/logout.tsx");
      route("/parkeringsplads", "routes/parkeringsplads.tsx");
      route("/privatpolitik", "routes/privacy-policy.tsx");
      route("/logind", "routes/sign-in.tsx");
      route("/opret", "routes/sign-up.tsx");

      //Rental
      route("/opret-udlejning", "routes/rental/rental.index.tsx");
      route(
        "/opret-udlejning/:id/attributes",
        "routes/rental/$id_.attributes.tsx"
      );
      route(
        "/opret-udlejning/:id/availability",
        "routes/rental/$id_.availability.tsx"
      );
      route("/opret-udlejning/:id/images", "routes/rental/$id_.images.tsx");
      route("/opret-udlejning/:id/location", "routes/rental/$id_.location.tsx");
      route("/opret-udlejning/:id/notes", "routes/rental/$id_.notes.tsx");
      route("/opret-udlejning/:id/price", "routes/rental/$id_.price.tsx");
      route("/opret-udlejning/:id/receipt", "routes/rental/$id_.receipt.tsx");
      route("/opret-udlejning/:id/type", "routes/rental/$id_.type.tsx");

      //Account
      route("/konto", "routes/account/account.parent.tsx", () => {
        route("", "routes/account/account.index.tsx", { index: true });
        route("kodeord", "routes/account/account.password.tsx");
        route("udlejninger", "routes/account/account.listings.tsx");
        route("notifikationer", "routes/account/account.notification.tsx");
        route("betalingskort", "routes/account/account.payment.tsx");
        route("rediger", "routes/account/account.edit.tsx");
        route("indstillinger", "routes/account/account.settings.tsx");
        route("verificeringer", "routes/account/account.verification.tsx");
      });

      //Blog
      route("/blog", "routes/blog/blog.index.tsx");
      route("/blog/artikel", "routes/blog/artikel.tsx");
      route("/blog/artikel2", "routes/blog/artikel2.tsx");
      route("/blog/artikel3", "routes/blog/artikel3.tsx");
      
      //Userstorie
      route("userstorie", "routes/userstories/userstorie.tsx");

      //Locate
      route("/find-parkering", "routes/locate/locate.parent.tsx", () => {
        route("galleri", "routes/locate/locate.gallery.tsx", { index: true });
        route("liste", "routes/locate/locate.list.tsx");
        route("kort", "routes/locate/locate.map.tsx");
      });
    });
  },
  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.
  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  serverDependenciesToBundle: [
    "swiper",
    "swiper/react",
    "swiper/react/swiper-react.js",
    "swiper/modules",
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
