import styled from 'styled-components';

const BackBtn = styled.button`
align-items: center;
background-color: transparent;
border: none;
color: ${({ theme }) => theme.colors.text};
display: flex;
font-size: 25px;
height: 30px;
justify-content: center;
width: 30px;
`;

export default BackBtn;
