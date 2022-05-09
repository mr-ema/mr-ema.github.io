import styled, { keyframes } from 'styled-components'

export const appear = keyframes`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 0;
  margin-left: -30px;
  position: relative;

  .appear {
    animation: ${appear} 600ms ease-in;
  }

  .hide {
    opacity: 0;
  }

  @media (max-width: 900px) {
    grid-column: 2/12;
    padding: 0;
    margin-left: 0;
  }
`
export const InfoBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  width: 80%;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Info = styled.div`
  background: #191919;
  border-radius: .3rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 6rem;
  padding: 2rem;
  position: relative;
  height: auto;
  width: 100%;

  @media (max-width: 900px) {
    gap: 3.6rem;
    flex-direction: ${props => props.reverse ? 'column-reverse':'column'};
    align-items: flex-start;
    justify-content: flex-start;
  }
`

export const Banner = styled.div`
  border: 0;
  width: 300px;
  height: auto;

  @media (max-width: 900px) {
    align-self: flex-end;
    justify-self: flex-end;
    padding-bottom: 2.6rem; 
    width: 200px;
  }

  @media (max-width: 600px) {
    width: 150px;
  }
`

export const Container = styled.section`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: auto;

  @media (max-width: 900px) {
    width: 100%;
  }
`

export const Title = styled.h1`
  color: #ee666e;
  font-size: 2.6rem;
  font-weight: 800;
  margin: 1rem 0;
  text-transform: uppercase;

  @media (max-width: 900px) {
    font-size: 1.9rem;
  }

  
  @media (max-width: 600px) {
    font-size: 1.36rem;
  }
`

export const Text = styled.p`
  color: #bbb;
  font-weight: 400;
  line-height: 130%;
  text-align: left;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }
`

export const ScrollBtn = styled.button`
  background: none;
  border: 0;
  color: #ee666e;
  cursor: pointer;
  font-size: 2.3rem;
  position: absolute;
  width: fit-content;
  aspect-ratio: 1/1;
  bottom: 2%;
  ${props => props.alignLeft ? 'left: 2%': 'right: 2%'};

  &:hover {
    opacity: 0.6;
  }

  @media (max-width: 900px) {
    left: 2%;
  }
`

export const Note = styled.span`
  display: block;
  background: #77e6ff19;
  border-left: 3px solid #77e6ff;
  border-radius: 0 .3rem .3rem 0;
  color: #77e6ff;
  font-weight: 600;
  margin: 1rem 0;
  padding: .6rem;
  opacity: .8;
  text-wrap: nowrap;
  width: fit-content;

  @media (max-width: 600px) {
    font-size: 0.8rem;
  }

  & > a {
    color: #4c90dc;
    font-weight: 800;
    margin-left: .3rem;
    text-decoration: none;

    &:hover {
      text-decoration: underline;
    }
  }
`
