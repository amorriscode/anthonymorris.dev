import { useKonamiState } from '../context/KonamiContext'
import Nav from './nav'

function withLayout(PageComponent: any) {
  const PageComponentWithLayout = ({ ...pageProps }) => {
    const { activated: konamiActivated } = useKonamiState()

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
