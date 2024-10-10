---
title: "Improving LLMs with syntehtic data"
description: "Maybe data is all you need"
date: "2024-10-09T00:00:00"
tags: ["Essay"]
---

If you haven’t heard yet, Large Language Models (LLMs) are all the rage. They’re going to change the future. They might even replace every developer on the planet (I don’t think this will happen any time soon but who knows).

At Stripe, we’ve started to adopt LLMs into our processes and products. We’ve seen wild success that helped save millions of dollars a year. LLMs empower us to do more than we could before but development with them is often frustrating and difficult.

On my team, Developer AI, we are exploring new ways for self-serve users to get started with Stripe. One of the products happens to have a conversational interface (surprise, it's a chatbot!). Our conversational interface is powered by LLMs so we’ve experienced the difficulties of building on top of them first hand. The conversation flow needs to feel natural to a user, allowing them to ask clarifying questions, while staying within bounds we've defined. During development, most of the conversations would go off without a hitch. Then we started giving it to humans…

## Tunnel vision

Sometimes we focus too heavily on the happy path during development. You’re constantly iterating so you want to test functionality as quickly as possible. For us, that meant getting to the conversation end state.

We provide users with "quick replies" so they don’t have to type messages to the LLM if they don’t have to. It’s great for users but it enables developers (read: me) to be lazy. Instead of acting like a human, I’m on autopilot clicking the quick replies. This tends to produce conversations that don’t necessarily reflect the real world. We miss out on edge cases that real users are bound to hit. However, it’s also quite difficult for our team to come up with hundreds of conversations that Stripe users might have when using the product. Without real conversations it became difficult to identify where the LLMs would break down.

## We need users (or the case for synthetic data)

Prior to private beta, our product has had very few users. We’ve done bug bashes and dogfooding sessions. Those have worked, we fixed a lot of bugs from them, but every week we seemed to discover a new edge case we hadn’t hit before. The pace of iteration was slow because there simply wasn't enough data.

When developing Llama 3, Meta used synthetic data in a [variety of ways](https://x.com/swyx/status/1815771160841425113). Meta created a pipeline to generate synthetic coding dialogues to improve Llama 3’s ability to generate code. During fine tuning, they would generate a large collection of descriptions about programming problems. With that diverse set of descriptions, they would generate solutions. Those solutions weren’t perfect so they’d approximate correctness (using static analysis and LLM-generated unit tests) then utilize correct solutions for fine tuning.

What if we used an LLM to generate hundreds of conversations with our product? What kind of problems would we discover? As it turns out, _a lot_.

We developed tooling that allowed us to synthetically go through entire conversations. We assigned our synthetic users a persona (eg. "you are a scrappy startup founder selling shoes online", "you are the CTO for a big company and very conscious of security and privacy.", etc.), added some randomness (eg. sometimes ask for clarification or say something out of domain), and unleashed them on the product. We suddenly found ourselves with thousands of conversations that we could analyze to improve our system.

## Synthetic data, real results

Our synthetic conversations allowed us to immediately identify tons of edge cases within our system. With our first run of ~500 conversations, ~80% of conversations wouldn’t make it to the end state. So much for the happy path.

We were able to pinpoint where our system was breaking down. We developed a system to help us iterate on our "intelligence engine" (the LLM parts of the system). Make some changes, generate synthetic conversations, analyze the conversations, repeat. Our first iteration brought us down from an 80% failure rate to 27%. The next iteration got us to a 25% error rate. The synthetic users were consistently making it down the happy path. After a month and a half of iterating in this way, we saw our first batch of conversations with a 0% error rate.

## A note on evals

Vibes based development is a very effective way of developing a proof of concept built on top of LLMs. Going to production is a whole different story. Any time we discovered an issue from the synthetic data we made sure that those edge cases were reflected in our datasets in [Braintrust](https://www.braintrust.dev/). Using an eval platform enabled our team to iterate in a way that felt closer to test driven development. It makes building with LLMs feel _sane_.

If you're still doing vibes based development, I recommend you give Braintrust a try.


## We haven’t won yet

Even with a 0% error rate, we have a lot of work to do with our conversations. We can improve the natural feel of the conversation and we need to make sure we don’t hallucinate when answering questions.

But iterating on all of these issues becomes a lot easier when our system isn’t going off the rails 80% of the time!
