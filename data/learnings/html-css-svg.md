---
title: "HTML/CSS In SVG"
description: "Embed HMTL and CSS directly in SVG."
date: "2020-07-21 00:00:00"
tags: ["Web Development", "HTML", "CSS", "SVG"]
---

GitHub added the ability to make your profile fancy with a [README file under a repo that is the same as your username](https://github.com/amorriscode/amorriscode). So what can you put in it? Well, mostly just [Markdown](https://www.markdownguide.org). But [sometimes you can use HTML in your Markdown](https://www.markdownguide.org/basic-syntax#html-best-practices). It's pretty barebones. You can't use CSS.

Or can you? 🤔

You can place SVGs in your Markdown. With SVGs you can include XHTML elements with [foreignObject](https://developer.mozilla.org/en-US/docs/Web/SVG/Element/foreignObject). So what we can do is build out some HTML and CSS inside our `foreignObject`. Now we have the ability to make thinks look pretty and even use CSS animations!

Admittedly, I probably spent more time on this than I should have but [this is what I came up with](https://github.com/amorriscode/amorriscode):

![A screenshot of my fancy new GitHub profile](/assets/til/github-profile.png)
