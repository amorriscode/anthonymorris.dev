import Nav from './nav'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    return (
      <>
        <Nav />

        <PageComponent {...pageProps} />
      </>
    )
  }

  return PageComponentWithLayout
}

export default withLayout
