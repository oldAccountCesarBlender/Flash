import "../src/global.css";
import { ContextProvider } from "../src/provider/context";

export default function App({ Component, pageProps }) {
  return (
    <ContextProvider>
      <Component {...pageProps} />
    </ContextProvider>
  );
}
