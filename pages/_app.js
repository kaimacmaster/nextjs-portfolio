import "@/styles/global.css";
import SiteHeader from "@/components/layout/site-header";

export default function App({ Component, pageProps }) {
  return (
    <div id="layout">
      <header id="header">
        <SiteHeader />
      </header>
      <main id="main">
        <Component {...pageProps} />
      </main>
      <footer id="footer" />
    </div>
  );
}
