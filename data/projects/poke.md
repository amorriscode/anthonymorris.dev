---
title: "poke"
description: "A gentle, text-based reminder iOS app."
date: "2022-01-31T00:00:00"
launchDate: "2022-01-31T00:00:00"
status: "hack"
---

You should've left work an hour ago, you're supposed to pick up milk on your way home, and you don't have a clue how you'll make it to the gym today. We've all been there.

After an hour in traffic, you're finally home. You walk through the door and greet your partner with a kiss. But no milk. Whoops.

For our [first product of the year](https://12products.xyz), Alice and I decided to build an iOS app for reminders. We wanted to meet the users where they already spend a lot of their time: Messages. Instead of another app fighting for your attention, we bank on the one that's already won. I'm interested in engaging with users via conversational interfaces so this was a fun experiment.

This wasn't my first time using React Native. I've never actually taken an iOS app from idea to release. Getting the email from Apple saying poke was in the App Store felt like a perfect way to start off 2022.

One product down, eleven more to go!

<div class="grid grid-cols-4 gap-4">
  <img style="margin-top: 0; margin-bottom: 0;" class="rounded-2xl" src="/assets/projects/poke/1.png" alt="Poke app screenshot" />
  <img style="margin-top: 0; margin-bottom: 0;" class="rounded-2xl" src="/assets/projects/poke/2.png" alt="Poke app screenshot" />
  <img style="margin-top: 0; margin-bottom: 0;" class="rounded-2xl" src="/assets/projects/poke/3.png" alt="Poke app screenshot" />
  <img style="margin-top: 0; margin-bottom: 0;" class="rounded-2xl" src="/assets/projects/poke/4.png" alt="Poke app screenshot" />
</div>

## Lessons Learned

Every month we want to try out different technologies or tools. The biggest lesson for me this month wasn't about the tech though. It was about the App Store. I severely underestimated the effort it would take to package up our app and get Apple's stamp of approval. We only got rejected a handful of times before they finally let us in.

Since we're streaming every Sunday, I also got a taste of what it's like to have a schedule based around your streams. I've been enjoying that a lot. It helps keep us accountable. We've also met quite a few cool people along the way!

## Tech

### React Native and Expo

We knew poke would be a phone app. Even though we didn't need it to be cross-platform, we decided to build it with React Native. Both of us had React Native experience so it just made sense. Using [expo](https://expo.dev/) is a dream. We did end up having to eject from the managed workflow because we wanted to integrate subscriptions.

### NestJS

I figured we'd iterate faster if the codebase was entirely TypeScript. I'd heard some good things about [NestJS](https://nestjs.com/) from a few co-workers so I figured we'd give it a try. I really enjoyed the experience of using opinionated software. At first I didn't like all of the class-based code (as if I'm a functional developer). The generators are a breeze to use. We didn't come across any use case that Nest couldn't handle for us.

### Misc

As with all of my indie projects, we used [Tailwind](https://tailwindcss.com/) to style the app. The developer experience continues to be a breeze. It's actually _fun_ iterating on design when using Tailwind.

We used [Twilio](https://www.twilio.com/) for auth. Since users need their phone number to receive our reminders, it just made sense. It was my first time using Twilio. Everything went pretty smoothly (except that one outage that caused an App Store rejection).

---

[poke Demo](https://www.youtube.com/watch?v=cBGfgPpSjmA)

[Frontend on GitHub](https://github.com/12products/poke-frontend)

[Backend on GitHub](https://github.com/12products/poke-backend)
