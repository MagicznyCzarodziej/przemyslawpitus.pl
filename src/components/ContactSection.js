import React, { Component } from 'react'
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg'

const Wrapper = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 5rem 0 5rem 5rem;
  font-size: 3.5rem;
  background-color: #0B0D19;
  color: #EEE;
  position: relative;
  overflow: hidden;
`;

const Header = styled.header`
  font-weight: bold;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: 2.5rem;
  margin-top: 5rem;
  li {
    margin-bottom: 1rem;
    a {
      color: #EEE;
      text-decoration: none;
      border-bottom: 2px solid #EEE;
    }
  }
`;

const StyledSvg = styled.svg`
  stroke: #333;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  position: absolute;
  &.github {
    stroke-width: 1.5;
    width: 30rem;
    height: 30rem;
    bottom: -5rem;
    left: -2rem;
    transform: rotate(20deg)
  }
  &.mail {
    stroke-width: 1;
    width: 50rem;
    height: 50rem;
    bottom: -7rem;
    right: -4rem;
    transform: rotate(-20deg)
  }
`;

export default class ContactSection extends Component {
  render() {
    return (
      <Wrapper id="contact">
        <Header>Kontakt</Header>
        <StyledList>
          <li>
            <b>Github:</b> <a href="http://github.com/MagicznyCzarodziej">github.com/MagicznyCzarodziej</a>            
          </li>
          <li>
            <b>Email:</b> pitusprzemyslaw@gmail.com
          </li>
        </StyledList>
        <StyledSvg className="github">
          <use xlinkHref={`${feather}#github`}/>
        </StyledSvg>
        <StyledSvg className="mail">
          <use xlinkHref={`${feather}#mail`}/>
        </StyledSvg>
      </Wrapper>
    )
  }
}
