import styled from "@emotion/styled";

const DateInput = styled.input`
  width: 100%;
  height: 2.5rem;
  border-radius: 0.75rem;
  border: none;
  padding: 0.5rem;
  color: ${(props) => props.theme.secondary};
  margin: 2.5rem 0.5rem 0 0;
  outline: none;
  font-family: "Orbitron", sans-serif;
  font-size: 0.625rem;
  background: ${(props) => props.theme.primary};

  @media only screen and (min-width: 48rem){
    font-size: 0.825rem;
  }

  &::-webkit-calendar-picker-indicator { 
    background-color: ${(props) => props.theme.tertiary}; 
    border-radius: 50%;
  };

  &:focus {
    border: 2px solid ${(props) => props.theme.tertiary};
    border-radius: 0.75rem;
  }
`;

export default DateInput;
