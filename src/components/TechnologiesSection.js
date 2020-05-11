import React from 'react';
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg';

const Wrapper = styled.div`
  background-color: #360434;
  position: relative;
  padding: 2rem;
  color: #EEE;
  overflow: hidden;

  @media (min-width: 1000px) {
    min-height: 100vh;
    padding: 5rem;
  }
`;

const TechnologiesHeader = styled.div`
  font-size: 2rem;
  font-weight: 300;
  margin-bottom: 2rem;
  
  @media (min-width: 1000px) {
    margin-bottom: 0;
    font-size: 3.5rem;
  }
`;

const Techs = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 2rem;
  ul {
    list-style-type: none;
    margin-bottom: 1rem;
  }

  @media (min-width: 1000px) {
    margin: 6rem 0;
    flex-direction: row;
    font-size: 2.5rem;

    ul {
      margin-right: 8rem;
      margin-bottom: 0;
    }
  }
`;

const ListHeader = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;  
`;

const Extra = styled.div`
  font-size: 2rem;
  font-weight: 300;

  @media (min-width: 1000px) {
    font-size: 2.5rem;
  }
`;

const BackgroundImage = styled.svg`
  position: absolute;
  bottom: -3rem;
  right: 2rem;
  width: 10rem;
  height: 10rem;
  opacity: 0.2;
  stroke: #EEE;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;

  @media (min-width: 1000px) {
    bottom: -6rem;  
    right: 4rem;  
    width: 30rem;  
    height: 30rem;  
  }
`;

export default class TechnologiesSection extends React.Component{
  render() {
    return (
      <Wrapper id="technologies">
        <TechnologiesHeader>Technologie, z których korzystam:</TechnologiesHeader>
          <Techs>
            <div>
              <ListHeader>Backend</ListHeader>
              <ul>
                <li>Node.js</li>
                <li>Express</li>
                <li>Socket.io</li>
                <li>MongoDB</li>
                <li>MySQL</li>
              </ul>
            </div>
            <div>
              <ListHeader>Frontend</ListHeader>
              <ul>
                <li>HTML5 + Stylus</li>
                <li>Vue.js + Vuex</li>
                <li>React + Styled Components</li>
              </ul>
            </div>
          </Techs>
          <Extra>
            <ListHeader>Ponadto, w moich projektach wykorzystuję</ListHeader>
            ES6, Typescript, REST API, Git, Eslint
          </Extra>
          <BackgroundImage>
            <use xlinkHref={`${feather}#layers`}/>
          </BackgroundImage>
      </Wrapper>
    )
  }
}