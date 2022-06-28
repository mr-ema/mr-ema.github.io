import React, { useEffect } from 'react'
import { Wrapper, InfoBox, Container, Title, Text, Banner, ScrollBtn, Note, Info } from './style'
import draw from './images/draw.png'
import desktop from './images/desktop.png'
import { RiArrowDownSLine, RiArrowUpSLine } from 'react-icons/ri'
import { scroll, fade } from './Appear'
import { ContactLinks } from 'Components'

function About() {

  useEffect(() => {
    addEventListener('scroll', fade, {passive: true})

    return () => removeEventListener('scroll', fade, {passive: true})
  },[])

  return (
    <Wrapper>
      <ContactLinks />

      <InfoBox >
        <Info className='appear'>
          <Container>
              <Title>About me</Title>
              <Text>
                • My name is <b>Emanuel</b>, I'm a <b>web developer</b>.
                I enjoy <b>code</b> and learn new things.
              </Text>
          </Container>

          <Banner >
            <img src={draw} alt='draw'/>
          </Banner>
      
          <ScrollBtn alignLeft onClick={ () => scroll('down')}>
            <RiArrowDownSLine/>
          </ScrollBtn>
        </Info>
      </InfoBox>

      <InfoBox >
        <Info reverse className='hide'>
            <Banner>
              <img src={desktop} alt='desktop'/>
            </Banner>
            <Container >
              <Title>Experience</Title>
              <Text>
                • A few local projects mainly in <b>React</b>.
                <br></br>
                • A <a href='https://github.com/mr-ema/netflix_clone' target='_blank'>Netflix Clone</a> using <b>[ MongoDb, React, Express ]</b>.
                <br></br>
                • A <a href='https://nextjs-store-tawny.vercel.app/' target='_blank'>Coffe Store</a> with <b>NextJS</b>.

                <Note>You Can See The Rest Here
                  <a href='https://github.com/mr-ema?tab=repositories' target='_blank'>GitHub.</a>
                </Note>
              </Text>
            </Container>

            <ScrollBtn onClick={ () => scroll('up')}>
              <RiArrowUpSLine/>
            </ScrollBtn>
        </Info>
      </InfoBox>
    </Wrapper>
  )
}

export default About