import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-column: 1/13;
    gap: 5%;
  }
`

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  & > h1 {
    color: #ddd;
    font-size: 7vw;

    @media (max-width: 600px) {
      font-size: 2.3rem;
    }
  }

  & > h1 > span {
    color: #ee666e;
  }

  & > span {
    color: #aaa;
    font-size: 1.2rem;
    font-weight: 600;

    @media (max-width: 900px) {
      font-size: 0.9rem;
    }
  }
`

export const Banner = styled.span`
  color: #ee666e;
  font-size: 16vw;
`