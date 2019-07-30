import React, { Component } from 'react'
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg';

const Wrapper = styled.div`
  height: 100vh;
  padding: 2rem;
  background-color: #0B0D19;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: start;
  color: #EEE;
  position: relative;

  .widescreen-break {
    display: none;
  }

  .rwd-line {
    display: inline;
  }

  @media (min-width: 1000px) {
    padding: 5rem;
    overflow: hidden;

    .widescreen-break {
      display: initial;
    }

    .rwd-line {
      display: block;
    }
  }
`;

const Header = styled.header`
  color: #EEE;

  @media (min-width: 1000px) {
    display: flex;
    justify-content: space-between;

  }
`;

const Name = styled.div`
  font-size: 9.5vw;
  letter-spacing: 4px;
  font-weight: bold;
  text-transform: uppercase;

  @media (min-width: 1000px) {
    font-size: 4rem;
  }
`;

const Profession = styled.div`
  font-weight: 100;
  font-size: 2.5rem;
  margin-top: 1rem;

  @media (min-width: 1000px) {
    text-align: right;
    font-size: 4rem;
    margin-top: 0;
  }
`;

const Info = styled.div`
  .info-mobile {
    font-size: 2.5rem;
    div {
      margin-top: 1rem;
    }
  }
  .info-desktop {
    display: none;
  }

  @media (min-width: 1000px) {
    .info-mobile {
      display: none;
    }
    .info-desktop {
      display: block;
      color: #EEE;
      font-size: 3rem;
      font-weight: 100;
      margin-top: 2rem;
    }
  }
`;

const Bold = styled.span`
  font-weight: 400;

  @media (min-width: 1000px) {
  
  }
`;

const GithubLink = styled.div`
  display: none;

  @media (min-width: 1000px) {
    display: initial;
    font-size: 3rem;
    font-weight: 300;
    text-align: right;
    a {
      color: #EEE;
      text-decoration: none;
      border-bottom: 2px solid #EEE;
    }
  }
`;

const Arrow = styled.svg`
  display: none;

  @media (min-width: 1000px) {
  display: initial;
  position: absolute;
  bottom: 2rem;
  left: calc(50% - 3rem);
  width: 6rem;
  height: 6rem;
  stroke: #EEE;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  }
`;

const StyledLink = styled.a`
  color: #EEE;
  font-weight: 300;
  text-decoration: none;

  @media (min-width: 1000px) {
    border-bottom: 2px solid #EEE;
  }
`;

export default class AboutSection extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Name>Przemysław<br/>Pitus</Name>
          <Profession>
            <span className="rwd-line">Full-stack</span>
            <span className="rwd-line">&nbsp;JS developer</span>
          </Profession>
        </Header>
        <Info>
          <p className="info-desktop">
            <Bold>Cześć!</Bold><br/>
            Wiesz już jak się nazywam, teraz możesz<br/>
            sprawdzić z jakich <StyledLink href="#technologies">technologii</StyledLink> korzystam,<br/>
            zobaczyć moje <StyledLink href="#projects">projekty</StyledLink><br/>
            lub <StyledLink href="#contact">skontaktować</StyledLink> się ze mną.
          </p>
          <p className="info-mobile">
            <div><StyledLink href="#technologies">&gt; technologie</StyledLink></div>
            <div><StyledLink href="#projects">&gt; projekty</StyledLink></div>
            <div><StyledLink href="#contact">&gt; kontakt</StyledLink></div>
          </p>
        </Info>
        <GithubLink><a href="https://github.com/MagicznyCzarodziej/">Github</a></GithubLink>
        <a href="#technologies">
          <Arrow>
            <use xlinkHref={`${feather}#chevron-down`}/>
          </Arrow>
        </a>
      </Wrapper>
    )
  }
}
