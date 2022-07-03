import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Wrapper } from '@/Styles/main';
import thanks from '@Public/assets/thanks.png';

export default function Thanks(): React.FunctionComponentElement<JSX.Element> {
  const goTo = useNavigate();
  
  React.useEffect(() => {
    const back = setTimeout(() => goTo('/'), 4600);

    return () => clearTimeout(back);
  }, [])

  return (
    <Wrapper>
      <MessageBox>
        <h1><span>T</span>han<span>ks !</span></h1>
        <span>└► I will contact you as soon as possible. ◄┘</span>
      </MessageBox>
      
      <ImageBox>
        <img src={thanks} alt='cheers' />
      </ImageBox>
    </Wrapper>
    
  )
}

// STYLES
const MessageBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: .6rem;
  width: 80%;  
  height: auto;

  & > h1 {
    color: ${props => props.theme.fg.primary};
    font-size: 6vw;
    font-weight: 800;
    text-transform: uppercase;

    @media (max-width:900px) {
      font-size: 8vw;
    }

    & > span {
      color:  ${props => props.theme.fg.terciary};
    }
  }

  & > span {
    display: block;
    color:  ${props => props.theme.fg.secundary};
    font-size: 2vw;
    font-weight: 600;

    @media (max-width:900px) {
      font-size: 3vw;
    }
  }
`

const ImageBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30vw;
  height: auto;

  @media (max-width:900px) {
    width: 40vw;
  }

  & > img {
    margin-top: 3rem;
    width: 100%;
    height: auto;
  }
`