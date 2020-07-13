import Link from 'next/link';

import Nav from './Nav';

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <>
        <div className="h-64 bg-buzz-purple-dark text-white flex flex-col justify-end">
          <header className="text-right container mx-auto px-4 md:px-8 lg:w-3/5 xl:w-2/5">
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
      </>
    );
  }

  return PageComponentWithLayout;
}

export default withLayout;
