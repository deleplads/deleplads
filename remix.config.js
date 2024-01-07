/** @type {import('@remix-run/dev').AppConfig} */

module.exports = {
  ignoredRouteFiles: ["**/.*"],
  routes: async defineRoutes => {
    return defineRoutes((route) => {
      route("/", "routes/index.tsx", { index: true });

      // Account

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
      route("/opdater/:id/tilgaengelighed", "routes/account/rentalspot/rentalspot.$id.availability.tsx");

      // Blog

      route("/blog", "routes/blog/blog.index.tsx");
      route("/blog/artikel", "routes/blog/artikel.tsx");
      route("/blog/artikel2", "routes/blog/artikel2.tsx");
      route("/blog/artikel3", "routes/blog/artikel3.tsx");

      // Legal

      route("/cookies", "routes/legal/cookies.tsx");
      route("/persondatapolitik", "routes/legal/privacypolicy.tsx");
      route("/regler-og-vilkaar", "routes/legal/terms-and-conditions.tsx");

      // Locate

      route("/find-parkering", "routes/results/results.parent.tsx", () => {
        route("galleri", "routes/results/results.gallery.tsx", { index: true });
        route("kort", "routes/results/results.map.tsx");
      });

        
      //Api
      
      route("/api/parkingspot/:id/image", "routes/api/parkingspot_$id_image.ts");


      // Rental

      route("/opret-udlejning", "routes/rental/rental.index.tsx");
      route("/opret-udlejning/:id/tilfoejelser", "routes/rental/$id_.attributes.tsx");
      route("/opret-udlejning/:id/beskrivelse", "routes/rental/$id_.description.tsx");
      route("/opret-udlejning/:id/billeder", "routes/rental/$id_.images.tsx");
      route("/opret-udlejning/:id/lokation", "routes/rental/$id_.location.tsx");
      route("/opret-udlejning/:id/noter", "routes/rental/$id_.notes.tsx");
      route("/opret-udlejning/:id/pris", "routes/rental/$id_.price.tsx");
      route("/opret-udlejning/:id/kvittering", "routes/rental/$id_.receipt.tsx");


      // User stories

      route("user-stories", "routes/user-stories/userstories.tsx");

      // Miscellaneous

      route("/kommunale-priser", "routes/kommunale-priser.tsx");
      route("/contact", "routes/contact.tsx");
      route("/logout", "routes/logout.tsx");
      route("/parkeringsplads/:id", "routes/parkeringsplads.$id.tsx");
      route("/logind", "routes/sign-in.tsx");
      route("/opret", "routes/sign-up.tsx");
    });
  },

  // When running locally in development mode, we use the built-in remix
  // server. This does not understand the vercel lambda module format,
  // so we default back to the standard build output.

  server: process.env.NODE_ENV === "development" ? undefined : "./server.ts",
  serverBuildPath: "api/index.js",
  serverDependenciesToBundle: [
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
