import Link from 'next/link';

import Nav from './Nav';

const memojis = ['joy', 'mindblown', 'think', 'wink'];

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const randomMemoji = memojis[Math.floor(Math.random() * memojis.length)];

    return (
      <>
        <div className="h-40 md:h-64 bg-buzz-purple-dark text-white flex flex-col justify-end">
          <header className="container mx-auto px-4 md:px-8 lg:w-3/5 xl:w-2/5 relative flex justify-center md:justify-end items-end overflow-hidden">
            <img src={`/assets/memojis/${randomMemoji}.png`} className="memoji absolute" />
            <Link href="/">
              <a className="header-link text-4xl uppercase font-extrabold">
                anthony morris
              </a>
            </Link>
          </header>          
        </div>

        <div className="container mx-auto lg:w-3/5 xl:w-2/5 px-4 md:px-8 relative">
          <div className="sticky top-0 bg-white z-10">
            <Nav />
          </div>

          <div className="py-4 md:py-8">
            <PageComponent {...pageProps} />
          </div>
        </div>

        <style jsx>{`
          header {
            height: 200px;
          }

          header:hover .memoji {
            top: 90px;
          }

          .memoji {
            top: 200px;
            right: 0;
            width: 180px;
            transition: 300ms top;
          }
        `}</style>
      </>
    );
  }

  return PageComponentWithLayout;
}

export default withLayout;
