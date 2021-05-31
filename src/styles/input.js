import styled from "styled-components";

export const Input = styled.input.attrs((props) => ({
  type: props.type || "text",
}))`
  font-size: 1em;
  border: 2px solid;
  border-radius: 3px;
  padding: 0.5em;
  margin: 0.25em;
  width: 100%;
  &:focus {
    border-color: #f03d4e;
    outline: 0;
  }
`;
