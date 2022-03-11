import { useState } from "react";
import styled from "styled-components";

export default function App({ Component, pageProps }) {
  const [players, setPlayers] = useState([]);
  const [nameOfGame, setNameOfGame] = useState("");
  const [history, setHistory] = useState([]);
  return (
    <AppLayout>
      <h1>Scorekeeper</h1>
      <Component {...pageProps} />
    </AppLayout>
  );
}
const AppLayout = styled.div`
  display: grid;
  gap: 20px;
  padding: 20px;
`;
