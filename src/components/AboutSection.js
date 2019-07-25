import React, { Component } from 'react'
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg';

const Wrapper = styled.div`
  height: 100vh;
  padding: 5rem;
  background-color: #0B0D19;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  scroll-snap-align: start;
  overflow: hidden;
  color: #EEE;
  position: relative;
`;

const Header = styled.header`
  font-size: 4rem;
  color: #EEE;
  display: flex;
  justify-content: space-between;
  `;

const Name = styled.div`
  letter-spacing: 4px;
  font-weight: bold;
  text-transform: uppercase;
`;

const HeaderRight = styled.div`
  font-weight: 100;
  text-align: right;
`;

const Info = styled.div`
  color: #EEE;
  font-size: 3rem;
  font-weight: 100;
`;

const Bold = styled.span`
  font-weight: 400;
`;

const GithubLink = styled.div`
  text-align: right;
  font-size: 3rem;
  font-weight: 300;
  a {
    color: #EEE;
    text-decoration: none;
    border-bottom: 2px solid #EEE;
  }
`;

const Arrow = styled.svg`
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
`;

const StyledLink = styled.a`
  color: #EEE;
  font-weight: 400;
  text-decoration: none;
  border-bottom: 2px solid #EEE;
`;

export default class AboutSection extends Component {
  render() {
    return (
      <Wrapper>
        <Header>
          <Name>Przemysław<br/>Pitus</Name>
          <HeaderRight>Full-stack<br/>JS developer</HeaderRight>
        </Header>
        <Info>
          <Bold>Cześć!</Bold><br/>
          Wiesz już jak się nazywam, teraz możesz<br/>
          sprawdzić z jakich <StyledLink href="#technologies">technologii</StyledLink> korzystam,<br/>
          zobaczyć moje <StyledLink href="#projects">projekty</StyledLink><br/>
          lub <StyledLink href="#contact">skontaktować</StyledLink> się ze mną.
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
