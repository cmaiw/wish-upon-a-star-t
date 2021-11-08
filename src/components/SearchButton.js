import styled from "@emotion/styled"

export const SearchButton = styled.button`
  display: flex;
  align-self: flex-start;
  justify-content: center;
  align-items: center;
  width: fit-content;
  height: 2.5rem;
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.secondary};
  border: none;
  border-radius: 0.75rem;
  padding: auto;
  margin-top: 2.5rem;
  font-size: 0.625rem;
  outline: none;
  cursor: pointer;
  font-family: "Orbitron", sans-serif;

  @media only screen and (min-width: 48rem){
    font-size: 0.825rem;
  }

  &:hover {
    background-color: ${(props) => props.theme.quartenary};
  }

  &:focus {
    border: 2px solid ${(props) => props.theme.tertiary};
    border-radius: 0.75rem;
  }
`