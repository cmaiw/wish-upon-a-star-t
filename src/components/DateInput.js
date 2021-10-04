import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 100%;
  height: 2rem;
  border: 2px solid ${(props) => props.theme.quinary};
  border-radius: 0.75rem;
  padding: 0.5rem;
  color: ${(props) => props.theme.secondary};
  margin-top: 2.5rem;
  outline: none;
  font-family: "Orbitron", sans-serif;
  font-size: 0.6em;
  background: ${(props) => props.theme.primary};
`;

export default DateInput;
