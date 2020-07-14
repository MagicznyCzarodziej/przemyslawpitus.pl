import React, { Component } from 'react'
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg'

const Wrapper = styled.div`
  height: 100vh;
  min-height: 30rem;
  padding: 2rem;
  font-size: 2.5rem;
  background-color: #0B0D19;
  color: #EEE;
  position: relative;
  overflow: hidden;

  @media (min-width: 1000px) {
    padding: 5rem;
    font-size: 3.5rem;
  }
`;

const Header = styled.header`
  font-weight: bold;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const StyledList = styled.ul`
  list-style-type: none;
  font-size: 1.5rem;
  margin-top: 5rem;
  position: relative;
  z-index: 1;
  li {
    margin-bottom: 1rem;
    word-wrap: break-word;

    a {
      word-break: normal;
      color: #EEE;
      text-decoration: none;
      border-bottom: 2px solid #EEE;
    }
  }

  @media (min-width: 1000px) {
    font-size: 2.5rem;
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
    width: 10rem;
    height: 10rem;
    bottom: -2rem;
    left: -1rem;
    transform: rotate(20deg);

    @media (min-width: 1000px) {
      width: 25rem;
      height: 25rem;
      bottom: -5rem;
      left: -2rem;
    }
  }
  &.mail {
    stroke-width: 1.5;
    width: 10rem;
    height: 10rem;
    bottom: -2rem;
    right: -2rem;
    transform: rotate(-20deg);

    @media (min-width: 1000px) {
      stroke-width: 1;
      width: 45rem;
      height: 45rem;
      bottom: -7rem;
      right: -4rem;
    }
  }
`;

export default class ContactSection extends Component {
  render() {
    return (
      <Wrapper id="contact">
        <Header>Kontakt</Header>
        <StyledList>
          <li>
            <b>Github:</b> <a href="http://github.com/MagicznyCzarodziej">MagicznyCzarodziej</a>            
          </li>
          <li>
            <b>Email:</b> pitusprzemyslaw&#8203;@gmail.com
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
