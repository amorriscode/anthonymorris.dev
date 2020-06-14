import Head from 'next/head';
import { addWeeks, isPast } from 'date-fns';

import withLayout from '../components/withLayout';

function Life() {
  const lifeCalendar = [];
  // Start the date on my birthday
  let prevDate = new Date('05-06-1990')

  // Create 88 rows for my 80 years
  for (let i = 0; i < 80; i++) {
    // Create a year 
    const year = [];
    
    // Fill my year with weeks
    for (let j = 0; j < 52; j++) {
      prevDate = addWeeks(new Date(prevDate), 1);
      year.push({ date: prevDate });
    }

    lifeCalendar.push(year);
  }

  // console.log(lifeCalendar);

  return (
    <div className="container">
      <Head>
        <title>💀 | anthony morris</title>
        {/* <link rel="icon" href="/favicon.ico" /> */}
      </Head>

      <main className="space-y-4">
        <h1 className="leading-none">
          My Life in Weeks
        </h1>

        <p>
          In Meditations Marcus Aurelius said <span className="font-bold">"You could leave life right now. Let that determine what you do and say and think."</span>
        </p>

        <p>
          We often optimize our lives for money, fun, or output. We know we have limited time but it's hard to put it all in context. I've been trying to remind myself that my time is limited. I've <a href="/projects/social-media-death-clock">built projects around the idea</a>, <a href="https://dailystoic.com/you-could-leave-life-right-now-let-that-determine-what-you-do-and-say-and-think/" target="_blank" rel="noopener noreferrer">purchased a token as a reminder</a>, and I even have some tattoos related to the theme. But still, it's hard to visualize.
        </p>

        <p>
          This is a reminder for me to cherish the life I have. To do the things I want to do and be with the people I want to be with. To let go of the things that don't matter or aren't in my control.
        </p>

        <p>
          Each box below represents one week of my life. The amount of years are based on the <a href="https://en.wikipedia.org/wiki/List_of_countries_by_life_expectancy" target="_blank" rel="noopener noreferrer">average life expectancy of a male living in Canada</a>. Everything that is filled out is in the past.
        </p>

        <p>
          Time to do something about those remaining blocks.
        </p>

        <div className="space-y-2 w-full">
          {lifeCalendar.map((year, i) => (
            <div className="grid gap-1 w-full relative">
              {i % 4 === 0 && <div className="hidden sm:block absolute text-xs -mt-1 -ml-5 text-right w-4 text-gray-400">{i}</div>}
              {year.map(week => (<div key={week.date.toISOString()} className={`rounded-sm h-2 w-2 border border-buzz-purple-dark ${isPast(week.date) ? 'bg-buzz-purple-neon border-none' : ''}`}></div>))}
            </div>
          ))}
        </div>
      </main>

      <style jsx>{`
        .grid {
          grid-template-columns: repeat(52, minmax(0, 1fr));
        }
      `}</style>
    </div>
  );
};

export default withLayout(Life);
