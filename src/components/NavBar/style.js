import styled from 'styled-components'

export const Wrapper = styled.nav`
  background: #161616;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: .6rem;
  position: fixed;
  
  max-width: 100px;
  height: 100vh;
  z-index: 99;

  @media (max-width: 900px) {
    grid-column: 1/13;
    bottom: 0;
    flex-direction: row;
    height: 60px;
    min-width: 100vw;
  }
`

export const Logo = styled.div`
  border: 0;
  display: flex;
  align-items: center;
  justify-content: center;

  max-height: 45px;
  max-width: 45px;
`

export const Links = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 2rem;
  padding: 0;
  width: auto;
  height: 100%;


  @media (max-width: 900px) {
    flex-direction: row;
    width: 100%;
    height: auto;
  }

  .link {
    display: block;
    color: #8e5d60;
  }

  .link:hover {
    filter: opacity(0.6);
  }

  .active {
    color: #ee666e;
  }
`

export const Icon = styled.span`
  display: flex;
  font-size: 2rem;
`