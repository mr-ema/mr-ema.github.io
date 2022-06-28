import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 1/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10rem;
  padding: 4rem 100px;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-column: 1/13;
    padding: 4rem 0;
  }
`

export const Box = styled.section`
  background: none;
  display: flex;
  justify-content: center;
  flex-flow: row wrap-reverse;
  gap: 1rem;
  
  width: 100%;
  height: auto;
`

export const Project = styled.div`
  background-color: #191919;
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

  @media screen and ( max-width: 1400px ){
    width: 90%;
  }

  a {
    text-decoration: none;
    color: #ee666e;
    font-weight: 600;
    opacity: 1;

    &:hover {
      opacity: .6;
    }
  }
`

export const Info = styled.div`
  background-color: #191919;
  border-radius: .3rem;
  display: flex;
  font-weight: 500;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
  padding: 2rem;
  position: relative;

  @media screen and ( max-width: 1400px ){
    width: 90%;
  }

  ol {
    align-self: flex-end;
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: .6rem;

    @media (max-width: 650px) {
      font-size: .8rem;
    }
  }

  div { 
    & > h2 {
      @media screen and (max-width: 900px) {
        font-size: 1.2rem;
      }
    }
  }

  a {
    align-self: flex-end;
    text-decoration: none;
    color: #ee666e;
    font-weight: 600;
    font-size: 1.6rem;
    opacity: 1;

    &:hover {
      opacity: .6;
    }
  }

  .tecnos {
    color: #666;
    font-size: 1.6rem;
    position: absolute;
    top: 1rem;
    right: 1rem;
  }
`