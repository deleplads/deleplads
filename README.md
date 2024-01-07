
# Welcome to Deleplads!!

Project made from Remix, Supabase and Prisma

## Custom Routing Approach

### Defining Routes
- **Syntax:** Routes are defined using a `defineRoutes` function. 
- **Structure:** The function takes a callback (`route`) that defines each route in the project.

### Route Definitions
- **Root Route (`/`):** Defined as `route("/", "routes/index.tsx", { index: true });`. This serves as the entry point of the application.

### Nested Routes
- **Example - Account Section:** 
  - Parent Route: Defined as `route("/konto", "routes/account/account.parent.tsx", () => {...});`.
  - Nested Routes: Inside the callback, nested routes such as `route("kodeord", "routes/account/account.password.tsx");` are defined.

### Dynamic Routes
- **Example - Rental Updates:** 
  - Dynamic segments are represented using `:id` in the path.
  - Defined as `route("/opdater/:id/tilgaengelighed", "routes/account/rentalspot/rentalspot.$id.availability.tsx");`.

### Blog, Legal, and Locate Routes
- **Structured Similar to Account Routes:** Each section has a base route and nested routes, if applicable.
- **Locate Section:** Has a parent route and nested routes like `route("galleri", "routes/locate/locate.gallery.tsx", { index: true });`.

### API Routes
- **Specialized Route:** For handling API requests, like `route("/api/parkingspot/:id/image", "routes/api/parkingspot_$id_image.ts");`.

### Rental Process
- **Multiple Steps:** Each step of the rental process is a separate route, such as `route("/opret-udlejning/:id/beskrivelse", "routes/rental/$id_.description.tsx");`.

### Miscellaneous Routes
- **Other Functionalities:** Includes routes like `route("/kontakt", "routes/kontakt.tsx");` for various standalone pages.
