import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import '../styles/custom-haseeb.css'; // Import Custom Haseeb CSS
import { Container } from 'react-bootstrap'; // Import the components you need
import Layout from '../components/Layout';
import { useEffect } from 'react';
import Router from 'next/router';
import NProgress from 'nprogress';
import 'nprogress/nprogress.css';


function MyApp({ Component, pageProps }) {

  // Layout for Header & Footer Common Components
  const getLayout = Component.getLayout || ((page) => <Layout>{page}</Layout>);

  useEffect(() => {
    // Start NProgress on route change
    const startProgress = () => NProgress.start();
    const stopProgress = () => NProgress.done();

    Router.events.on('routeChangeStart', startProgress);
    Router.events.on('routeChangeComplete', stopProgress);
    Router.events.on('routeChangeError', stopProgress);
    return () => {
      Router.events.off('routeChangeStart', startProgress);
      Router.events.off('routeChangeComplete', stopProgress);
      Router.events.off('routeChangeError', stopProgress);
    };
  }, []);


  return getLayout(
    <Container>
      <Component {...pageProps} />
    </Container>
  );
}

export default MyApp
