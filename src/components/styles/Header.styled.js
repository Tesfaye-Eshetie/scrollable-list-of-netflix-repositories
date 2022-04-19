import styled from 'styled-components'

export const Header = styled.div`
    margin: 0;
    min-height: 100px;
    background: ${({ theme }) => theme.colors.headerBack};
    color: ${({ theme }) => theme.colors.headerColor};
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.15);
    display: flex;
    justify-content: space-evenly;
    font-size: 24px;
    font-weight: 800;
    opacity:0.8;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 18px;
        align-items: center;
        flex-direction: column;
      }
`