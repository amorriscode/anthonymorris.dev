---
title: "stx.me"
description: "stx.me allows anyone to easily receive STX donations on their website."
date: "2021-04-11T00:00:00"
launchDate: "2021-04-01T00:00:00"
status: "live"
revenue: 5000
---

I've been interested in [[blockchain]] since 2013. It always seemed really fascinating to me. I still have emails that I sent to my family trying to convince them to buy [[Bitcoin]] at the time (they didn't listen).

Although I was always interested in the space, I never contributed to any [[blockchain]] projects. At the beginning of 2021, I discovered the [Stacks Foundation](https://stacks.org/). They were [rewarding grants](https://stacks.org/grants) to people that wanted to build with Stacks.

[Stacks](https://www.stacks.co/) makes [[Bitcoin]] programmable. It helps bridge the gap between [[Bitcoin]] and [[Ethereum]].

I had the idea to make a JavaScript library that would enable anyone to easily accept STX donations on their website. Like a [Buy Me a Coffee](https://www.buymeacoffee.com/) but integrated with the [Stacks blockchain](https://www.stacks.co/).

I was [awarded a Stacks Grant](https://github.com/stacksgov/Stacks-Grants/issues/59) and this project is what came of my idea.

![Hassle-free STX donations for any website](/assets/projects/stx-me/screen-1.png)

## Lessons Learned

This was the first time I ever built a JavaScript library that would be embedded onto people's websites. I had to dive deeper into build tooling than I had before.

Learning how to wrangle my Webpack bundle to replace specific Node packages with web-friendly ones was my biggest challenge. Some of the Stacks libraries I was using required me to [use fallbacks](https://github.com/amorriscode/stx-me/blob/2586859bb337b94e5373356d6ab50ccd506ba420/webpack.config.js#L29), especially with the `Buffer` package.

## Tech

### ESBuild

I chose to use [esbuild](https://github.com/evanw/esbuild) with Webpack. It's an extremely performant bundler and minifier for JavaScript. Thanks to [esbuild-loader](https://github.com/privatenumber/esbuild-loader) it was dead simple to setup.

### Stacks Libraries

stx.me connects to a user's Stacks wallet (a Chrome Extension). In order to do this, I utilized a few [Stacks libraries](https://www.stacks.co/developers).

The libraries are used to [authenticate a user](https://docs.blockstack.org/build-apps/guides/authentication) and [sign their donation transaction](https://docs.blockstack.org/build-apps/guides/transaction-signing).

I was pretty impressed with the documentation and developer experience of the libraries. The design team at Stacks heavily inspired the [stx.me website](https://getstx.me) as well.

### Misc

- [TypeScript](https://www.typescriptlang.org/)
- [Tailwind CSS](https://tailwindcss.com/)
  - Used to make things pretty
- [Testing Library](https://testing-library.com/)
  - Used to get that code coverage to 100%
- [Webpack](https://webpack.js.org/)
- [Next.js](https://nextjs.org)
  - Next is my favourite tool for building stuff on my own
- [Vercel](https://vercel.com/)
  - Could deployments be any easier?

---

[stx.me on GitHub](https://github.com/amorriscode/stx-me)

[stx.me website](https://getstx.me)

[stx.me on Product Hunt](https://www.producthunt.com/posts/stx-me)
