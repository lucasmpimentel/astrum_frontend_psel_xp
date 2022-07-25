import styled from 'styled-components';

const Input = styled.input`
border: none;
background-color: transparent;
border-bottom: 2px solid ${({ theme }) => theme.colors.text};
font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
font-size: 20px;
margin-top: 15px;
min-height: 50px;
color: ${({ theme }) => theme.colors.text};
min-width: 100%;
padding: 15px 20px;

&:active {
  border: none;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.text};
}
`;

export default Input;
