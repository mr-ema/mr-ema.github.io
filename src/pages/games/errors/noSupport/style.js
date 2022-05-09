import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  gap: 40%;
  align-items: center;
  padding: 10% 0;
  box-sizing: border-box;
  z-index: 1;

  @media (max-width: 900px) {
    grid-column: 1/13;
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;

  & > h1 {
    color: #ccc;
    font-size: 1.3rem;
    font-weight: 800;
  }

  & > h1 > span {
    color: #ff006e;
    margin-right: 2px;
  }

  & > span {
    color: #aaa;
    font-size: 1rem;
    font-weight: 600;
  }
`

export const Banner = styled.span`
  color: #ff006e;
  font-size: 26vw;
`