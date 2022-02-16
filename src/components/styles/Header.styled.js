import styled from 'styled-components'

export const Header = styled.div`
    margin: 0;
    height: 80px;
    background: ${({ theme }) => theme.colors.headerBack};
    color: ${({ theme }) => theme.colors.headerColor};
    display: flex;
    justify-content: space-evenly;
    font-size: 18px;
    font-weight: 800;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 14px;
        height: 100px;
      }
`