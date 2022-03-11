import styled from "styled-components";

export default styled.button`
  background-color: ${(props) => (props.isActive ? "#333" : "lightgray")};
  color: ${(props) => (props.isActive ? "white" : "inherit")};
  border: 1px solid black;
  width: 100%;
  padding: 0.6rem;
  text-align: center;
  border-radius: 2px;

  &:disabled {
    opacity: 0.4;
  }
`;
