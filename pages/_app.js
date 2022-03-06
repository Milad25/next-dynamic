import '../styles/globals.css';
import CouterProvider from '../providers/CounterProvider';

function MyApp({ Component, pageProps }) {
  return (
    <CouterProvider>
      <Component {...pageProps} />
    </CouterProvider>
  );
}

export default MyApp;
