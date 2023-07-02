# HOW TO!!!!
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

> **Warning**  
> The `@remix-run/vercel` runtime adapter has been deprecated in favor of out of
> the box Vercel functionality and will be removed in Remix v2.  
> This means you don't have to use the Vercel template & can just use the Remix
> template instead.

# Welcome to Remix!

- [Remix Docs](https://remix.run/docs)

## Deployment

After having run the `create-remix` command and selected "Vercel" as a deployment target, you only need to [import your Git repository](https://vercel.com/new) into Vercel, and it will be deployed.

If you'd like to avoid using a Git repository, you can also deploy the directory by running [Vercel CLI](https://vercel.com/cli):

```sh
npm i -g vercel
vercel
```

It is generally recommended to use a Git repository, because future commits will then automatically be deployed by Vercel, through its [Git Integration](https://vercel.com/docs/concepts/git).

## Development

To run your Remix app locally, make sure your project's local dependencies are installed:

```sh
npm install
```

Afterwards, start the Remix development server like so:

```sh
npm run dev
```

Open up [http://localhost:3000](http://localhost:3000) and you should be ready to go!

If you're used to using the `vercel dev` command provided by [Vercel CLI](https://vercel.com/cli) instead, you can also use that, but it's not needed.
