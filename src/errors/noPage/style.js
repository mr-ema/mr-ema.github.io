import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10%;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
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

  & > a {
    border: 0;
    border-left: .2rem solid #ff006e;
    border-right: .2rem solid #ff006e;
    color: #ddd;
    font-weight: 800;
    padding: .3rem .9rem;
    text-decoration: none;

    @media(max-width: 900px) {
      font-size: 0.7rem;
    }
  }

  & > a:hover {
    opacity: 0.6;
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