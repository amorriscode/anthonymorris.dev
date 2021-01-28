---
title: 'Tavern'
description: "Tavern helps you practice for technical interviews like you're playing a roleplaying game."
date: '2021-01-27T00:00:00'
launchDate: '2021-01-10T00:00:00'
status: 'hack'
---

I haven't done a hackathon in a really long time. They kind of scare me (that's a story for another time).

This year my friends and I decided to attend [nwHacks](https://www.nwhacks.io/). It's western Canada's largest hackathon. I was excited to take my focus away from school for a weekend and build something hacky!

[nwHacks](https://www.nwhacks.io/) doesn't do themes for their hackathon. Personally, having the constraints is one of my favourite things about hackathons. There's something special about being given a prompt and building around it. My team agreed so everyone came up with our own prompts and we voted on them. We ended up voting for **mundane life gamified**.

With our theme set, we went through the same process, this time deciding what our project would be. Our initial idea was a platform for cultivating friendships with RPG-like quests. You'd do fun challenges with your friends and earn points as a "guild".

The night before the hackathon, I felt like something was missing. Our idea was fun but I didn't think it had a **wow** factor. Then I thought, what if we applied it to algorithm practice? Practicing for technical interviews can be daunting, but what if it was gamified? I'm no salesman but I managed to convince the team to build a gamified version of [Leet Code](https://leetcode.com).

The Tavern adventure starts when you create your character. You join a guild with your friends to solve algorithm problems with. Each guild competes against each other in a global leaderboard. Every day new challenges are unlocked and you earn XP when members of your guild solve the challenges.

![Screenshot of Tavern's code editor](/assets/projects/tavern/screen-1.png)

The "finished" hack ended up having a full code editor that would allow people to solve algorithm challenges. When you submit your solutions, a suite of tests would run on the backend. We also had the ability to create your character. It was classic RPG style where you cycle through many options for your hair, head, body, etc. The art department ([Jet](http://jetsimon.com/)) knocked it out of the park.

![Screenshot of Tavern's code editor](/assets/projects/tavern/screen-2.png)

You can only build for 24 hours at [nwHacks](https://www.nwhacks.io/). That really puts the pressure on. Our project was ambitious (like most hackathon projects). Two of us stayed up for the entire 24 hours. Nothing like a lack of sleep to make you feel young again!

We didn't come out on top but we did win an honourable mention. I'm proud of what we all put together and can't wait for my next hackathon adventure!

## How We Built Tavern

### Redwood JS

Since our project was ambitious, I knew [Redwood JS](https://redwoodjs.com) would be a great choice. When tackling ambitious projects at hackathons (and in general) it's important to use tools that empower you to focus on the product. Redwood does so much for you, it makes you feel like a 10x developer. That's all we really needed to move fast and accomplish everything we did in 24 hours.

### Tailwind

I use [Tailwind](https://tailwindcss.com) for everything I do. I don't like using UI libraries. I prefer to have the flexibility of doing it myself. With [Tailwind](https://tailwindcss.com) it's so easy to make components for your app look consistent and gorgeous. It's like [Redwood](https://redwoodjs.com), it let's you put your focus on the product!

### Magic

This isn't the first time I've tried using [Magic](https://magic.link/) for authentication. It works with [Redwood](https://redwoodjs.com) out of the box. It's neat because it uses [blockchain technology](https://www.dropbox.com/s/3flqaszoigwis5b/Magic%20Whitepaper.pdf?dl=0) but doesn't shove the buzz words down your throat. Unfortunately I have had some issues using it but I haven't had a chance to sort them out! Still, passwordless logins are the future.

---

[Tavern on GitHub](https://github.com/amorriscode/tavern/)

[Tavern on Dev Post](https://devpost.com/software/tavern-2764g3)