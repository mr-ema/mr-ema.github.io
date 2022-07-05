import styled from 'styled-components';

export const Wrapper = styled.div`
  grid-column: 1/13;
  background-color: ${props => props.theme.bg.primary};
  color: ${props => props.theme.fg.primary};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 0 0 0 70px;
  margin-left: -30px;
  position: relative;

  @media (max-width: 900px) {
    padding: 10px 1.69rem 60px 1.69rem;
    margin-left: 0;
  }
`

export const Note = styled.span`
display: block;
background: #77b2ff2b;
border-left: 3px solid ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
border-radius: 0 .3rem .3rem 0;
color: ${props => props.theme.mode === 'light' ? '#005070' : '#77e6ff'};
font-weight: 600;
margin: 1rem 0;
padding: .6rem;
opacity: .8;
width: fit-content;

@media (max-width: 600px) {
  font-size: 0.69rem;
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