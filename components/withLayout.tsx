import Link from 'next/link';

import Nav from './Nav';

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <>
        <div className="container mx-auto sm:w-3/5 px-5 pb-5">
          <header className="text-right text-4xl mb-4">
            <Link href="/">
              <a className="header-link">
                anthony morris
              </a>
            </Link>

            <div className="gradient-line w-full"></div>
          </header>

          <div className="flex flex-col sm:flex-row">
            <Nav />

            <div className="sm:w-3/4">
              <PageComponent {...pageProps} />
            </div>
          </div>
        </div>

        <style jsx>{`
          .gradient-line {
            height: 2px;
            background-image: linear-gradient(90deg, #1f1837, #65285a, #e200b9);
          }
        `}</style>
      </>
    );
  }

  return PageComponentWithLayout;
}

export default withLayout;
