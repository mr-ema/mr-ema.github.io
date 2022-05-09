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
                • My name is <b>Antonio</b>, I'm a <b>web developer</b>.
                I enjoy <b>code</b> and learn new things. When I <b>design</b>, I like to keep it <b>simple</b>.
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
              <Text>• No much just a few local-projects mainly in <b>React</b>.
                      I made a <b>Netflix Clone</b> using <b>[ MongoDb, React, Express ]</b>,
                      and small projects: an info page about plants, animals and a mini-game with pure JS.
                      <Note>Soon I will upload them to 
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