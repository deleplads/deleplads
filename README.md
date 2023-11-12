# HOW TO!!!!

npx supabase gen types typescript --project-id slotgmexnyekacixnhyc > db_types.ts

Du skal køre følgende:

npm install

npm install -g sass

npm run dev

Måden du for css til at virke, er at du bruger følgende logik inder under routes:
```
import navBarStyle from "../styles/components/navbar.css";
import heroStyle from "../styles/components/hero.css";
import footerStyle from "../styles/components/footer.css";
import galleryStyle from "../styles/components/gallery.css";
import searchbarStyle from "../styles/components/searchbar.css";


export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: navBarStyle },
  { rel: "stylesheet", href: footerStyle },
  { rel: "stylesheet", href: heroStyle },
  { rel: "stylesheet", href: galleryStyle },
  { rel: "stylesheet", href: searchbarStyle },
];
};
```

Det vil sige du skal inde i routen Kontakt som jeg har lavet indsætte følgende:
import kontaktStyle from '../styles/components/kontakt.css'

og tilføje inde i.
export const links: LinksFunction = () => {
    ...
  { rel: "stylesheet", href: kontaktStyle },
}

Du kan ikke gøre dette under componenter desværre.

Så du kan kun indsætte alt dette under routes/ så hvis du laver en faq udner routes, skal du indsætte:

```export const links: LinksFunction = () => {
  return [{ rel: "stylesheet", href: navBarStyle },
  { rel: "stylesheet", href: footerStyle },
  { rel: "stylesheet", href: heroStyle },
  { rel: "stylesheet", href: galleryStyle },
  { rel: "stylesheet", href: searchbarStyle },
   { rel: "stylesheet", href: faqStyle },
];
};
```

> **Welcome to DelePlads**  

# Project Routing Structure

## Overview
This project utilizes [Flat route](https://github.com/kiliman/remix-flat-routes) for managing routes. Our routing structure is designed to be intuitive and scalable, ensuring easy navigation and maintenance.

## Structure

### Routes
- **Root (`/`):** The root of our routing structure.
  - **_index folder:** Serves as the home page route.

- **Navbar and Footer:** These components are located in the root directory, making them available across all routes.

![Navbar and Footer Integration](./documentationImages\image.png)

### Nested Routes
- Each folder under the root can contain nested routes, providing a hierarchical and organized structure.

#### Example: `locate` Route
- The `locate` folder includes three subfolders, each representing a nested route:
  1. `locate/gallery`
  2. `locate/list`
  3. `locate/map`

![Nested Routes Example](./documentationImages\image2.png)

#### Route Composition
- In the case of the `locate` route, a `route.tsx` file is present.
  - **Function:** This file acts as a parent component.
  - **Outlet:** It contains an `Outlet` component where the nested routes (e.g., `locate/gallery`) inject their respective HTML and data.

![Route Composition with Outlet](./documentationImages\image3.png)

### Exception Case: `rental` Route
- **Difference:** Unlike the `locate` route, the `rental` route does not have a `route.tsx` file in its parent folder.
- **Implication:** This means nested routes under `rental` do not share a common parent component.

![Rental Route Structure](./documentationImages\image3.png)

## Naming Convention
- **Standard Format:** For folders without a specific use case for nested structures, the naming convention is `_[folder-name].tsx`.
- **Purpose:** This convention signifies that the folder does not follow the nested route composition like `route.tsx`.
- **Example:** If there's a folder named `example` without nested route needs, it should be named `_example.tsx`.

![Naming Convention Example](path-to-your-image)

## Conclusion
Our routing system, fortified by the Flat route structure and strategic placement of `route.tsx` files, offers a flexible and maintainable setup. This allows for shared and distinct layouts across different sections of our application, adhering to a clear naming convention.