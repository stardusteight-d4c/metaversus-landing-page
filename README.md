# Metaversus | Next.js 13 & Framer Motion

![banner](banner.png)

> Project for the construction of a landing page carried out on the `JavaScript Mastery` channel, where he was taught how to incorporate a `Figma` layout 
> into the a `React` code (library to create user interfaces in web pages) using the `Next.js 13` framework (production ready framework that
> enables hybrid rendering (static and server-side), TypeScript support, smart packaging, route prefetching for web apps based on React). 
> In this project we use good practices for creating web interfaces, how to deal with static files, constants and how to separate responsibilities 
> with organizing directories for front-end applications. In addition to these modern technologies that we have on the market, we use the package
> `Framer Motion` which is also a modern solution for creating sophisticated linear animations.

:arrow_right: Next.js | The React Framework <br />
:arrow_right: Rendering Fundamentals & Performance | React 18 and Next.js 13 <br />
:arrow_right: Framer Motion | Production-ready declarative animations <br />

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

<br />
 
## Rendering Fundamentals & Performance | React 18 and Next.js 13

Rendering converts the code you write into user interfaces.

`React 18 and Next.js 13 introduced new ways to render your application`. This page will help you understand the differences between `rendering environments, strategies, runtimes, and how to opt into them`.

### Rendering Environments

There are two environments where your application code can be rendered: the `client` and the `server`.

 - The `client` refers to the browser on a user’s device that sends a request to a server for your application code. It then turns the response from the server into an interface the user can interact with.
 - The `server` refers to the computer in a data center that stores your application code, receives requests from a client, does some computation, and sends back an appropriate response.
 
> Note: Server is a general name that can refer to computers in Origin Regions
> where your application is deployed to, the Edge Network where your application
> code is distributed, or Content Delivery Networks (CDNs) where the result of 
> the rendering work can be cached.

### Component-level Client and Server Rendering

`Before React 18`, the primary way to render your application using React was entirely on the client.

Next.js provided an easier way to break down your application into pages and prerender on the server by generating HTML and sending it to the client to be `hydrated` by React. However, this led to `additional JavaScript needed on the client` to make the initial HTML interactive.

Now, with `Server and Client Components`, React can render on the client and the server meaning you can choose the rendering environment at the component level. By default, the `app directory uses Server Components`, allowing you to easily render components on the server and `reducing the amount of JavaScript sent to the client`. However, you have the option to use Client Components inside app and render on the client.

You can `interleave Server and Client Components in your application`, and behind the scenes, `React will seamlessly merge the work of both environments`.

### Server and Client Components

Server and Client Components allow developers to build applications that span the server and client, `combining the rich interactivity of client-side apps with the improved performance of traditional server rendering`.

### Server Components

All components inside the `app` directory are `React Server Components by default`, including special files and colocated components. This allows you to automatically adopt Server Components with no extra work, and achieve great performance out of the box.

#### Why Server Components?

Server Components (RFC) allow developers to `better leverage server infrastructure`. For example, large dependencies that previously would impact the JavaScript bundle size on the client `can instead remain entirely on the server, leading to improved performance`. However, the app directory does still require JavaScript.

When a route is loaded, the Next.js and React runtime will be loaded, which is cacheable and predictable in size. This runtime does not increase in size as your application grows. Further, the runtime is asynchronously loaded, `enabling your HTML from the server to be progressively enhanced on the client`.

Additional JavaScript is only added as client-side interactivity is used in your application through Client Components.

#### Client Components

Client Components are rendered on the `client`. With Next.js, Client Components can also be `pre-rendered on the server and hydrated on the client`.

##### Convention

To use a Client Component, create a file inside `app` and add the `"use client"` directive at the top of the file (before any imports).

```jsx
'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { ExploreCard, TitleText, TypingText } from '../components'
import { staggerContainer } from '../utils/motion'
import { exploreWorlds } from '../constants'
import styles from '../styles'

const Explore = () => {
  const [active, setActive] = useState('world-2')

  return (
    <section className={`${styles.paddings}`} id="explore">
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.25 }}
        className={`${styles.innerWidth} mx-auto flex flex-col`}
      >
        <TypingText title="| The World" textStyles="text-center" />
        <TitleText
          title={
            <>
              Chooose the world you want <br className="md:block hidden" /> to
              explore
            </>
          }
          textStyles="text-center"
        />
        <div className="mt-[50px] flex lg:flex-row flex-col min-h-[70vh] gap-5">
          {exploreWorlds.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={setActive}
            />
          ))}
        </div>
      </motion.div>
    </section>
  )
}

export default Explore
```

`You only need to mark components as 'use client' when they use client hooks such as useState or useEffect`. It's best to leave components that do not depend on client hooks without the directive so that they can automatically be rendered as a Server Component when they aren't imported by another Client Component. This helps ensure the smallest amount of client-side JavaScript. 

*<i>beta.nextjs.org/docs/rendering/fundamentals</i> <br />
*<i>beta.nextjs.org/docs/rendering/server-and-client-components</i> <br />

<br />
 
## Framer Motion | Production-ready declarative animations

A simple declarative syntax means you write less code. Less code means your codebase is easier to read and maintain.

### Overview

 - <strong>Variants</strong>

Variants can be used to animate entire sub-trees of components with a single animate prop. Options like when and staggerChildren can be used to declaratively orchestrate these animations.

 - <strong>Scroll-triggered animations</strong>

Elements can animate as they `enter and leave the viewport` with the handy `whileInView` prop.

```js
// utils/motion.js

export const navVariants = {
  hidden: {
    opacity: 0,
    y: -50,
    transition: {
      type: 'spring',
      stiffness: 300,
      damping: 140,
    },
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'spring',
      stiffness: 80,
      delay: 1,
    },
  },
};
```

```jsx
// components/Navbar.jsx

import { motion } from 'framer-motion'
import styles from '../styles'
import { navVariants } from '../utils/motion'

const Navbar = () => (
  <motion.nav
    variants={navVariants}
    initial="hidden"
    whileInView="show"
    className={`${styles.xPaddings} py-8 relative`}
  >
   // children
  </motion.nav>
)

export default Navbar
```

 - <strong>Server-side rendering</strong>

The animated state of a component will be rendered `server-side` to prevent flashes of re-styled content after your JavaScript loads.

 - <strong>Transition</strong>

A transition `defines how values animate from one state to another`.

A transition defines the type of animation used when animating between two values.


```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ delay: 1 }}
/>
```

It can also accept props that define which `type` of animation to use a `Tween`, `Spring` or `Inertia`.

```jsx
<motion.div
  animate={{ x: 100 }}
  transition={{ type: "spring", stiffness: 100 }}
/>
```

In this application, different approaches were used to animate different components, for example, you can create a style variation and apply it to each letter of a text, for this the `<TypingText />` component was created:

```js
// utils/motion.js

export const textContainer = {
  hidden: {
    opacity: 0,
  },
  show: (i = 1) => ({
    opacity: 1,
    transition: { staggerChildren: 0.1, delayChildren: i * 0.1 },
  }),
};

export const textVariant2 = {
  hidden: {
    opacity: 0,
    y: 20,
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: 'tween',
      ease: 'easeIn',
    },
  },
};
```

```jsx
// components/CustomText.jsx

export const TypingText = ({ title, textStyles }) => (
  <motion.p
    variants={textContainer}
    className={`font-normal text-sm text-secondary-white ${textStyles}`}
  >
    {Array.from(title).map((letter, index) => (
      <motion.span variants={textVariant2} key={index}>
        {letter === ' ' ? '\u00A0' : letter}
      </motion.span>
    ))}
  </motion.p>
)
```

 - <strong>Orchestration</strong>

> delay: number

Delay the animation by this duration (in seconds). Defaults to 0.

```js
const transition = {
  delay: 0.2
}
```

> delayChildren: number

When using variants, children animations will start after this duration (in seconds). You can add the `transition` property to both the `Frame` and the `variant` directly. Adding it to the `variant` generally offers more flexibility, as it allows you to customize the delay per visual state.

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      delayChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

return (
  <motion.ul
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ul>
)
```

> staggerChildren: number

When using variants, animations of child components can be staggered by this duration (in seconds).

For instance, if `staggerChildren` is `0.01`, the first child will be delayed by `0` seconds, the second by `0.01`, the third by `0.02` and so on.

The calculated stagger delay will be added to delayChildren.

```jsx
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.5
    }
  }
}

const item = {
  hidden: { opacity: 0 },
  show: { opacity: 1 }
}

return (
  <motion.ol
    variants={container}
    initial="hidden"
    animate="show"
  >
    <motion.li variants={item} />
    <motion.li variants={item} />
  </motion.ol>
)
```

*<i>framer.com/docs/introduction</i> <br />
