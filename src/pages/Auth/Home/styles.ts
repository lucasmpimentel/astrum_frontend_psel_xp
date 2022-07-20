import styled from 'styled-components';

export const Main = styled.main`
color: ${({ theme }) => theme.colors.text};
padding: 15px;
`;

export const Header = styled.header`
align-items: center;
display: flex;
justify-content: space-between;
`;
