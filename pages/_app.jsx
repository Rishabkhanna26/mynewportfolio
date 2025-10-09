import '../src/index.css';
import PageLoader from '../src/components/PageLoader';

export default function App({ Component, pageProps }) {
  return (
    <>
      <PageLoader />
      <Component {...pageProps} />
    </>
  );
}
