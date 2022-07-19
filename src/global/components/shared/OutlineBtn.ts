import styled from 'styled-components';

const OutlineBtn = styled.button`
align-items: center;
background-color: transparent;
border: solid 2px ${({ theme }) => theme.colors.text};
border-radius: 50px;
color: ${({ theme }) => theme.colors.text};
display: flex;
font-family: -apple-system, BlinkMacSystemFont, Roboto, Oxygen, Ubuntu, Cantarell, sans-serif;
font-size: 13px;
font-weight: 900;
height: 50px;
justify-content: center;
letter-spacing: 0.04em;
line-height: 15px;
margin-top: 25px;
text-transform: uppercase;
width: 100%;

&:active {
  background-color: ${({ theme }) => theme.colors.text};
  color: ${({ theme }) => theme.colors.background};
}
`;

export default OutlineBtn;
