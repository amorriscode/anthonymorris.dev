---
title: "War Room"
description: "Making incident response stress free."
date: "2022-02-28T00:00:00"
launchDate: "2022-02-28T00:00:00"
status: "hack"
---

We went into February after launching our [first product](/projects/poke) in the App Store! The success of poke made us feel like we were hitting a good stride. This time we might've bit off more than we could chew.

War Room is an idea I had quite a few years ago. There were plenty of options out there for building status pages. There are also tons of options for alerting and monitoring. But why do we use Google Docs or Notion for managing an incident after we've been paged?

I thought it'd be worthwhile to build a product that developers could use _after_ they've been paged. Something to manage incident information that would also communicate problems to users. When I first had the idea, it seemed like it would be a great product. A few competitors have launched since then.

War Room is equipped to handle your conference calls during the incident, your status page for customer communication, and collecting all information related to an incident.

## Lessons Learned

With War Room, Alice and I rubbed against our first bit of failure while focusing on [12prouducts](https://12products.xyz). Scheduling was tough. The scope of the project was ambitious. And we were learning [Solid JS](https://solidjs.com/) on top of it all. There were times when I had doubts we could keep building a product every month.

After spending the month building we didn't come away with a shipped product. We were close. During the deployment at the end of the month, we had issues with building the frontend. We were already eating time into March's product. It was time to move on.

[Failure never feels good](/failures) but they almost always come with lessons to learn. I'm grateful for [12prouducts](https://12products.xyz). This year isn't about launching businesses, it's about building products. I have to keep that in mind as we push forward.

Even though War Room is a failure in my eyes, I had a lot of fun building it. We met a lot of great people on Stream, started a [Discord server](https://discord.gg/f4fEpAc89s), and even got two [GitHub sponsors](https://github.com/sponsors/12products)!

## Tech

### Solid JS

[Solid JS](https://solidjs.com/) was a pleasure to use. The approach to reactivity felt really refreshing. There were only a few times when it got in the way. We just had to stop thinking like we were working with React. A lot of the time I felt myself preferring it to React. Do I want to use it again? Yes. Will I use it again soon? Probably not.

The biggest downside to Solid is the app ecosystem. There are a few packages out there for things like GraphQL or date pickers but they are usually not being actively developed, only half-built or worse, full of bugs. I submitted a couple of PRs and issues to packages during the month, none of which have been responded to.

If I weren't working on 12products, I'd probably focus a lot of my time building in the Solid ecosystem. Since there aren't many projects out there, there's nothing but opportunity. Solid JS is a such a joy too so I wouldn't mind building out some packages!

### daily

In War Room, we wanted WebRTC support. That's where the name comes from after all. When you're debugging an incident, you hop in a conference call with other developers to make sure the incident is resolved as quickly as possible. I have nothing but positive things to say about [daily](https://daily.co). It really ended up being a drop in solution with minor tweaking to styles. Couldn't have been easier!

---

[Frontend on GitHub](https://github.com/12products/warroom-frontend)

[Backend on GitHub](https://github.com/12products/warroom-backend)
