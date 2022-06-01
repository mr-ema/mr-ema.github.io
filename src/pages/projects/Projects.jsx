import React from 'react'
import project from './images/nextjs_store.png'
import { Wrapper, Box, Project, Info } from './style'
import { SiNextdotjs, SiMongodb, SiGithub } from 'react-icons/si'

export default function Projects() {
  return (
    <Wrapper>
      <Box>
        <Project>
          <a href='https://nextjs-store-mr-ema.vercel.app/' target='_blank'>
            <img src={project} alt='Nextjs-Store Project'/>
          </a>
          <a href='https://nextjs-store-mr-ema.vercel.app/' target='_blank'>Click Me</a>
        </Project>
        <Info>
          <span className='tecnos'>
            <SiNextdotjs/> <SiMongodb/>
          </span>
          <div>
            <h2>NextJs Store</h2>
            <span>First e-commerce and NextJs project.</span>
          </div>
          <div>
          <h3>Made With:</h3>
          <ol>
            <li>NextJs</li>
            <li>Mongoose</li>
            <li>Webpay</li>
            <li>Yup for form validation</li>
          </ol>
          </div>
          <a href='https://github.com/mr-ema/nextjs-store/' target='_blank'><SiGithub/></a>
        </Info>
      </Box>

    </Wrapper>
  )
}
