# Metaversus | Next.js 13 & Framer Motion

![banner](banner.png)

> Project for the construction of a leaning page carried out on the `JavaScript Mastery` channel, where he was taught how to incorporate a `Figma` layout 
> into the a `React` code (library to create user interfaces in web pages) using the `Next.js 13` framework (production ready framework that
> enables hybrid rendering (static and server-side), TypeScript support, smart packaging, route prefetching for web apps based on React). 
> In this project we use good practices for creating web interfaces, how to deal with static files, constants and how to separate responsibilities 
> with organizing directories for front-end applications. In addition to these modern technologies that we have on the market, we use the package
> `Framer Motion` which is also a modern solution for creating simple and sophisticated linear animations.

:arrow_right: Next.js | The React Framework <br />
:arrow_right: React 18 and Next.js 13 | Rendering Fundamentals <br />
:arrow_right: Framer Motion <br />
:arrow_right: File Structure and Static Files <br />

<br />

## Next.js | The React Framework

Enter Next.js, the React Framework. Next.js provides a solution to all of the above problems. But more importantly, it puts you and your team in the pit of success when building React applications.

Next.js aims to have best-in-class developer experience and many built-in features, such as:

 - An intuitive `page-based routing system` (with support for dynamic routes);
 - `Pre-rendering`, both `static generation (SSG) and server-side rendering (SSR)` are supported on a per-page basis;
 - Automatic code splitting for faster page loads;
 - Client-side routing with optimized prefetching;
 - Built-in CSS and Sass support, and support for any CSS-in-JS library;
 - Development environment with Fast Refresh support;
 - `API routes` to build API endpoints with Serverless Functions;
 - Fully extendable.

Next.js is used in tens of thousands of production-facing websites and web applications, including many of the world's largest brands.

We recommend creating a new Next.js app using `create-next-app`, which sets up everything automatically for you. (You don't need to create an empty directory. create-next-app will make one for you.) To create a project, run:

 - `npx create-next-app@latest`
 
 If you want to start with a TypeScript project you can use the --typescript flag:

 - `npx create-next-app@latest --typescript`
 
 
Run `npm run dev` to start the development server on `localhost:3000`, visit localhost:3000 to view your application and edit `pages/index.js` and see the updated result in your browser.

### Pages

Note: Next.js 13 introduces the `app/ directory (beta)`. This new directory has support for layouts, nested routes, and uses Server Components by default. Inside app/, you can fetch data for your entire application inside layouts, including support for more granular nested layouts (with colocated data fetching).

In Next.js, a page is a React Component exported from a .js, .jsx, .ts, or .tsx file in the `pages` directory. `Each page is associated with a route based on its file name`.

Example: If you create `pages/about.js` that exports a React component like below, it will be accessible at `/about`.


```jsx
export default function About() {
  return <div>About</div>
}
```

### Pre-rendering

By default, Next.js `pre-renders every page`. This means that Next.js generates HTML for each page in advance, `instead of having it all done by client-side JavaScript`. `Pre-rendering can result in better performance and SEO`.

Each generated HTML is associated with minimal JavaScript code necessary for that page. `When a page is loaded by the browser, its JavaScript code runs and makes the page fully interactive. (This process is called hydration).`

### Static File Serving

Next.js can serve `static files`, like images, under `a folder called public in the root directory`. Files inside public can then be referenced by your code starting from the `base URL (/)`.

For example, if you add an image to `public/me.png`, the following code will access the image:

```jsx
import Image from 'next/image'

function Avatar() {
  return <Image src="/me.png" alt="me" width="64" height="64" />
}

export default Avatar
```

### `src` Directory

Pages can also be added under `src/pages` as an alternative to the root pages directory.

The src directory is very common in many apps and Next.js supports it by default.

#### Caveats

 - `src/pages` will be ignored if pages is present in the root directory;
 - Config files like next.config.js and tsconfig.json, as well as environment variables, should be inside the root directory, moving them to src won't work. Same goes for the public directory.

*<i>nextjs.org/docs/getting-started</i>
