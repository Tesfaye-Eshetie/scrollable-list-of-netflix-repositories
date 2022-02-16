import styled from 'styled-components'

export const Container = styled.div`
    max-height: 80vh; 
    overflow: auto; 
    margin-right: 80px;
    @media (max-width: ${({ theme }) => theme.mobile}) {
        margin-right: 10px; 
`