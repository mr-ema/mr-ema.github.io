import styled,  { keyframes } from 'styled-components'

const typing = keyframes`
  from {
    width: 0;
  }
`

const blink = keyframes`
  50% {
    border-color: transparent;
  }
`

export const Wrapper = styled.div`
  grid-column: 2/13;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  position: relative;
  box-sizing: border-box;

  @media (max-width: 900px) {
    grid-column: 1/13;
    padding: 0;
  }
`

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0;
  position: relative;
  overflow: hidden;
  width: 100%;
  height: 100%;
`

export const Slogan = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding: 2rem;
  z-index: 1;

  @media (max-width:650px) {
    gap: .3rem;
  }
`

export const Name = styled.h1`
  animation: ${typing} 2s steps(34) 3s, ${blink} .5s step-end infinite alternate;
  box-sizing: content-box;
  border-right: 4px solid #ee666e;
  color: #ee666e;
  font-size: 3rem;
  font-weight: 800;
  white-space: nowrap;
  width: 100%;
  overflow: hidden;

  @media (max-width: 650px) {
    font-size: 1.6rem;
  }
`

export const Info = styled.span`
  color: #aaa;
  font-size: 1.2rem;
  font-weight: 800;

  @media (max-width: 650px) {
    font-size: 0.7rem;
  }
`

export const Technologies = styled.code`
  color: #888;
  font-weight: 600;

  @media (max-width: 650px) {
    font-size: 0.6rem;
  }
`

export const Avatar = styled.div`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  opacity: .36;
  width: 50%;
  height: 50%;
`

export const ContactMe = styled.button`
  align-self: center;
  border: 0;
  border-radius: .6rem .6rem 0 0;
  box-sizing: border-box;
  background: none;
  border-bottom: .2rem solid #ee666e;
  color: #eee;
  text-decoration: none;
  text-align: center;

  font-size: 0.9rem;
  font-weight: 600;
  padding: .6rem;
  position: relative;
  overflow: hidden;
  width: 50%;
  transition: width 300ms linear;

  @media (max-width: 650px) {
    align-self: flex-start;
    font-size: 0.6rem;
    width: 80%;
  }
 
  &:hover {
    color: #aaa;
    background: #cccccc11;
    width: 100%;
  }

  & > a {
    text-decoration: none;
  }
`