import Image from 'next/image';
import Poetry from "../../public/images/poetry.png"
import Metro from "../../public/images/metro.gif"
import Chengyu from "../../public/images/chengyu.png"
import Auction from "../../public/images/auction.png"
import Advice from "../../public/images/advice-generator.gif"
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import LogoDevIcon from '@mui/icons-material/LogoDev';
import { Button } from '@mui/material';
import Link from 'next/link';


export default function Home() {
  return (
    <div>
      <header>
        <h1>Ivy Chen -- a frontend developer based in Taipei, Taiwan by way of San Francisco. Avid writer, runner, and crafter.</h1>
        <span className="socials">
          <Button target="_blank" href="https://github.com/ivavay"><GitHubIcon/></Button>
          <Button target="_blank" href="https://www.linkedin.com/in/ivy-chen-4065aab7/"><LinkedInIcon/></Button>
          <Button target="_blank" href="https://dev.to/ivavay"><LogoDevIcon/></Button>
        </span>
      </header>
      <div className="grid gap-4 lg:grid-cols-4 gap-4">
        <ProjectCard src={Advice} title="Advice Generator" blurb="A simple page to display random advice from API" tag1="API" tag2="Javascript" repo="https://github.com/ivavay/advice-generator" demo="https://advice-generator-two-roan.vercel.app/" />
        <ProjectCard src={Auction} title="Auction" blurb="Ecommerce app to list and bid on items" tag1 ="Django" tag2="Python"  demo="https://youtu.be/JtOW5pCYh20?si=mm16cYEqb81agC0C"/>
        <ProjectCard src={Poetry} title="Blackout Poetry Maker" blurb="A reductionist way to make poems using block-out method" tag1="CSS" tag2="Javascript" repo="https://github.com/ivavay/jacobs-wonderbar" demo="https://blackout-poetry-digital.glitch.me/"/>
        <ProjectCard  src={Metro} title="MRT Game" blurb="A terminal game made in Python to randomize stops" tag1="Python" tag2="Randomize" repo="https://github.com/ivavay/mrt-game"/>
        <ProjectCard  src={Chengyu} title="Chengyu" blurb="Chrome extension to learn Chinese idioms" tag1="Jasvascript" tag2="JSON" repo="https://github.com/ivavay/chengyu-extension" demo="https://chromewebstore.google.com/detail/chengyu/hgedahiaddaonjomddplfchiiemhifkn?hl=zh-TW"/>
      </div>
      <footer>©2024 Ivy Chen, built with Next.js</footer>
    </div>
  );
}

export function ProjectCard(props) {
  return (
    <div>
      <div className="card">
      <div className='section'>
          <h3>{props.title}</h3>
          <p>
            {props.blurb}
          </p>
        </div>
        <Image src={props.src} />
        <div className="tags">
          <div className="tag">{props.tag1}</div>
          <div className="tag">{props.tag2}</div>
        </div>
        <div className="links">
          <span>
          <a href={props.repo} passhref="true" target='_blank'>Repo ↗</a>
          </span>
          <span> 
          <a href={props.demo} passhref target='_blank'>Demo ↗</a>
          </span>
        </div>
      </div>
    </div>
  )
}