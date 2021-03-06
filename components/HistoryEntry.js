import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
//import Anchor from "./Anchor";
import Button from "./Button";

export default function HistoryEntry({ id, nameOfGame, players }) {
  const [showScore, setShowScore] = useState(false);

  return (
    <Wrapper>
      <GameTitle>{nameOfGame}</GameTitle>
      <Link href={`/game/${id}`} passHref>
        <Anchor as="a">Continue game →</Anchor>
      </Link>
      <Button onClick={() => setShowScore(!showScore)}>
        {showScore ? "Hide score" : "Show score"}
      </Button>
      {showScore &&
        players.map(({ name, score, id }) => (
          <Player key={id}>
            <span>{name}</span>
            <span>{score}</span>
          </Player>
        ))}
    </Wrapper>
  );
}

const Wrapper = styled.section`
  display: grid;
  gap: 10px;
  border: 1px solid grey;
  border-radius: 4px;
  padding: 8px;
`;

const Player = styled.div`
  display: flex;
  justify-content: space-between;
`;

const GameTitle = styled.span`
  text-transform: uppercase;
  font-weight: lighter;
`;

const Anchor = styled.a`
  background-color: ${(props) => (props.isActive ? "#333" : "transparent")};
    color: ${(props) => (props.isActive ? "white" : "inherit")};
    width: 100%;
    padding: 0.6rem;
    text-align: center;
    border-radius: 2px;
    &:disabled {
    opacity: 0.4;
  }
`;

