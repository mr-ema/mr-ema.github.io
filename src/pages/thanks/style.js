import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6rem;
  padding: 2rem;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-column: 1/13;
  }
`

export const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .6rem;
  width: 80%;  
  height: auto;

  & > h1 {
    color: #ccc;
    font-size: 6vw;
    font-weight: 800;
    text-transform: uppercase;

    @media (max-width:900px) {
      font-size: 8vw;
    }

    & > span {
      color: #ff336e;
    }
  }

  & > span {
    display: block;
    color: #aaa;
    font-size: 2vw;
    font-weight: 600;

    @media (max-width:900px) {
      font-size: 3vw;
    }
  }
`

export const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: auto;

  @media (max-width:900px) {
    width: 40vw;
  }

  & > img {
    width: 100%;
    height: auto;
  }
`