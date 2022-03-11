import React from "react";
import styled from "styled-components";
import { useRouter } from "next/router";
import Link from "next/link";

export default function Navigation() {
  const { pathname } = useRouter();
  console.log(pathname);
  return (
    <Nav>
      <Link href="/" passHref>
        <Anchor as="a" isActive={pathname === "/"}>
          Play
        </Anchor>
      </Link>
      <Link href="/history" passHref>
        <Anchor as="a" isActive={pathname === "/history"}>
          History
        </Anchor>
      </Link>
    </Nav>
  );
}

const Nav = styled.nav`
  display: flex;
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
