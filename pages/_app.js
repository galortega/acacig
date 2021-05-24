import "bootstrap/dist/css/bootstrap.min.css";
import "../assets/css/main.css";
import "../assets/css/estilos.css";
import "../assets/css/flexboxgrid.css";

// This default export is required in a new `pages/_app.js` file.
export default function MyApp({ Component, pageProps }) {
  return <Component {...pageProps} />;
}
