/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  routes: async (defineRoutes) => {
    return defineRoutes((route) => {
      route("/", "routes/index.tsx", { index: true });
      
      route("/cookies", "routes/cookies.tsx");
      route("/faqs", "routes/faq.tsx");
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
      route("/opret-udlejning", "routes/rental/_index.tsx");
      route("/opret-udlejning/:id/attributes", "routes/rental/$id_.attributes.tsx");
      route(
        "/opret-udlejning/:id/avaliability/single",
        "routes/rental/$id_.avaliability_.single.tsx"
      );
      route(
        "/opret-udlejning/:id/avaliability/type",
        "routes/rental/$id_.avaliability_.type.tsx"
      );
      route("/opret-udlejning/:id/avaliability", "routes/rental/$id_.avaliability.tsx");
      route("/opret-udlejning/:id/images", "routes/rental/$id_.images.tsx");
      route("/opret-udlejning/:id/location", "routes/rental/$id_.location.tsx");
      route("/opret-udlejning/:id/notes", "routes/rental/$id_.notes.tsx");
      route("/opret-udlejning/:id/price", "routes/rental/$id_.price.tsx");
      route("/opret-udlejning/:id/receipt", "routes/rental/$id_.receipt.tsx");
      route("/opret-udlejning/:id/type", "routes/rental/$id_.type.tsx");

      //Account
      route("/account", "routes/account/parent.tsx", () => {
        route("", "routes/account/index.tsx", { index: true });
        route("aktivitet", "routes/account/activity.tsx");
        route("opslag", "routes/account/listings.tsx");
        route("notifikationer", "routes/account/notification.tsx");
        route("betalinger", "routes/account/payment.tsx");
        route("profil", "routes/account/profile.tsx");
        route("indstillinger", "routes/account/settings.tsx");
        route("verifikation", "routes/account/verification.tsx");
      });


      //Blog
      route("/blog", "routes/blog/route.tsx", () => {
        route("artikel", "routes/blog/artikel.tsx");
        route("artikel2", "routes/blog/artikel2.tsx");
      });
      
      //Locate
      route("/find", "routes/locate/parent.tsx", () => {
        route("galleri", "routes/locate/gallery.tsx",  { index: true });
        route("liste", "routes/locate/list.tsx");
        route("kort", "routes/locate/map.tsx");
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
