---
title: "Fancy Script Tags"
description: "Using async and defer in your script tags."
date: "2020-10-08T00:00:00"
tags: ["HTML", "JavaScript", "Web Development"]
---

Since I started programming, I've always put my `script` tags at the bottom of my HTML documents. That way whatever scripts I bring in can see the HTML elements above it and it won't block page content from loading. There are two attributes that change the way `script` tags are loaded but I didn't know about them before today.

## Defer

```html
<script defer src="https://anthonymorris.dev/coolscript.js"></script>
```

Using `defer` tells the browser to execute our script _after_ the document has been parsed but before firing `DOMContentLoaded`. This will allow the browser to parse the DOM before running the script.

## Async

```html
<script async src="https://anthonymorris.dev/coolscript.js"></script>
```

Using `async` is similar to `defer` in that we can parse the DOM before executing the script. However, with `async`, the script gets fetched in parallel to the parsing. It will get executed as soon as it's available.

These tools are useful for improving the user experience of our page load times. We're shipping more JavaScript to the user than ever before and like everything, there are pros and cons that come along with it.

---

**Further Reading:**

- [Script element on MDN](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/script)
- [Scripts: async, defer](https://javascript.info/script-async-defer)
