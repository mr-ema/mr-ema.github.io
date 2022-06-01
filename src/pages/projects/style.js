import styled from 'styled-components'

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;
  padding: 2rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-column: 1/13;
    padding: 0;
  }
`

export const Box = styled.section`
  background: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  
  width: 100%;
  height: auto;
`

export const Project = styled.div`
  grid-column: auto;
  background-color: #191919;
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  padding: 2rem;

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
  grid-column: auto;
  background-color: #191919;
  border-radius: .3rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: .3rem;
  padding: 2rem;
  position: relative;

  ol {
    align-self: flex-end;
    list-style: inside;
    display: flex;
    flex-direction: column;
    gap: .6rem;
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