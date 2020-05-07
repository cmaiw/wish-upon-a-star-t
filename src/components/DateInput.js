import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 80%;
  height: 36px;
  border: 2px solid ${(props) => props.theme.quinary};
  border-radius: 12px;
  padding: 10px;
  color: ${(props) => props.theme.secondary};
  margin-top: 40px;
  outline: none;
  font-family: "Orbitron", sans-serif;
  font-size: 0.6em;
  background: ${(props) => props.theme.primary};
`;

export default DateInput;
