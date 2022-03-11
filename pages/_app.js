export default function App({ Component, pageProps }) {
  return (
    <>
      <h1>Scorekeeper</h1>
      <Component {...pageProps} />
      <h2>Create a new game</h2>
    </>
  );
}
