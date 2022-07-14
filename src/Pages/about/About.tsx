import React from 'react';
import { AnimationOnScroll } from 'react-animation-on-scroll';
import { Container, Wrapper, Text, SLink, Note, Image } from '@/Styles/Main';
import draw from '@Public/assets/images/draw.png';
import desktop from '@Public/assets/images/desktop.png';

export default function About(): JSX.Element {
  return (
    <Wrapper jc='flex-start'>
   
        <Container height={80} style={{background: 'none'}}>
          <AnimationOnScroll animateIn="animate__bounceInLeft">
            <Container jc='space-between' style={{background: 'none'}}>
              <Text>
                <h1>About Me</h1>
                <p> My name is Emanuel, I'm a web developer.
                    I enjoy code and learn new things.</p>
              </Text>
              <Image hide={1500} src={draw} alt='draw' width={300} />
            </Container>
          </AnimationOnScroll>  
        </Container>
      

    
      <Container height={80} style={{background: 'none'}}>
        <AnimationOnScroll animateIn="animate__bounceInLeft">
          <Container  jc='space-between' style={{background: 'none'}}>
            <Image hide={1500} src={desktop} alt='desktop' width={300} />

            <Text>
              <h1>Experience</h1>
              <p>
                A few local projects mainly in <b>React</b>.
                <ul className='list'>
                  <li>
                    A <SLink href='https://github.com/mr-ema/netflix_clone' target='_blank'>Netflix Clone</SLink>.
                  </li>
                  <li>
                    A <SLink href='https://nextjs-store-tawny.vercel.app/' target='_blank'>Coffe Store</SLink>.
                  </li>
                </ul>
              </p>

              <Note>You Can See The Rest Here
                <a href='https://github.com/mr-ema?tab=repositories' target='_blank'>GitHub.</a>
              </Note>
            </Text>
          </Container>
        </AnimationOnScroll>
      </Container>

    </Wrapper>
  )
}