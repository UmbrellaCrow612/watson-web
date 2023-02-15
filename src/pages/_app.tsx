import GlobalLayout from '@/layouts/GlobalLayout'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import "../scripts/script";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <GlobalLayout>
      <Component {...pageProps} />
    </GlobalLayout>
  );
}
