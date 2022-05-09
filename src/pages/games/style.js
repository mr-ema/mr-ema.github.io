import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  padding: 2rem;
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 900px) {
    grid-column: 1/13;
  }
`