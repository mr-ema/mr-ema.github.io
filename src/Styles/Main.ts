import styled from 'styled-components';

export const Wrapper = styled.main<{jc?: string}>`
  grid-column: 1/13;
  background: ${props => props.theme.bg.primary};
  background: ${props => props.theme.bg.gradient};
  color: ${props => props.theme.fg.primary};
  display: flex;
  flex-direction: column;
  justify-content: ${props => props.jc ? props.jc : 'center'};
  align-items: center;
  padding: 2rem;
  gap: 2rem;
  position: relative;
  
  overflow-x: hidden;
  overflow-y: auto;
  perspective: 2px;

  min-height: calc(100vh - 100px);

  @media (max-width: 900px) {
    padding: 10px 1.69rem 60px 1.69rem;
    margin-left: 0;
  }
`

// ========================================================================
export const Note = styled.span`
display: block;
background: #77b2ff2b;
border-left: 3px solid ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
border-radius: 0 .3rem .3rem 0;
color: ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
font-size: 1.2rem;
font-weight: 600;
margin: 1rem 0;
padding: .6rem;
opacity: .8;
width: fit-content;
@media (max-width: 900px) {
  font-size: 0.8rem;
}
& > a {
  color: ${props => props.theme.mode === 'light' ? '#003449' : '#a3eeff'};
  font-weight: 800;
  margin-left: .3rem;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
}
`

// ========================================================================
export const Container = styled.div<{width?: number, height?: number, fd?: string, jc?: string}>`
  display: flex;
  align-items: center;
  justify-content: ${props => props.jc ? props.jc : 'center'};;
  flex-wrap: wrap;
  flex-direction: ${props => props.fd ? props.fd : 'unset'};
  gap: 2rem;
  background-color: ${props => props.theme.bg.secundary};
  padding: 2rem;
  position: relative;

  width: ${props => props.width ? (props.width + '%'): '100%'};
  height: ${props => props.height ? (props.height + 'vh'): 'auto'};

  @media screen and (max-width: 600px){ width: 100%; gap: 1rem; }

`

// ========================================================================
export const Image = styled.img<{width?: number, height?: number, hide?: number}>`
  display: block;

  max-width: ${props => props.width ? (props.width + 'px'): '100%'};
  max-height: ${props => props.height ? (props.height + 'px'): 'auto'};

  @media screen and 
  (max-width: ${props => props.hide ? (props.hide + 'px') : '0px'}){display: none;}
`

// ========================================================================
export const Text = styled.div<{right?: boolean}>`
  font-family: 'Josefin Sans', sans-serif;

  h1 {
    font-family: inherit;
    font-size: 3.6rem;
    @media screen and (max-width: 900px){ font-size: 2.3rem; }
  }
  h2 {
    font-family: inherit;
    font-size: 2.3rem;
    @media screen and (max-width: 900px){ font-size: 1.2rem; }
  }
  p {
    font-family: 'Open Sans', sans-serif;
    font-size: 1.3rem;
    margin-top: .69rem;
    @media screen and (max-width: 900px){ font-size: .8rem; }
  }
`

// ========================================================================
export const Date = styled.span`
  display: block;
  color: inherit;
  font-size: 1rem;
  font-weight: 400;
  margin-bottom: 1.3rem;
  opacity: .69;
  text-transform: lowercase;
`

// ========================================================================
export const SLink = styled.a`
  color: ${props => props.theme.fg.terciary};
  opacity: .69;

  &:hover {
    opacity: 1;
  }
`