import "@/styles/globals.css";
import { AppProps } from 'next/app';
import { IntlProvider } from 'react-intl';
import { useRouter } from 'next/router';
import enMessages from '../locales/en.json';
import ptMessages from '../locales/pt.json';

type Locale = 'en' | 'pt';  // Defina os possíveis valores para o locale

const messages: Record<Locale, Record<string, string>> = {
  en: enMessages,
  pt: ptMessages,
};

function MyApp({ Component, pageProps }: AppProps) {
  const { locale } = useRouter();

  // Garantir que o locale nunca seja undefined
  const currentLocale: Locale = (locale as Locale) || 'en';  // Valor default 'en' caso locale seja undefined

  return (
    <IntlProvider locale={currentLocale} messages={messages[currentLocale]}>
      <Component {...pageProps} />
    </IntlProvider>
  );
}

export default MyApp;
