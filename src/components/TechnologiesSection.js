import React from 'react';
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg';

const TechnologiesHeader = styled.div`
  font-size: 3.5rem;
  font-weight: 300;
`;

const Techs = styled.div`
  display: flex;
  margin: 6rem 0;
  font-size: 2.5rem;
  ul {
    list-style-type: none;
    margin-right: 8rem;
  }
`;

const ListHeader = styled.div`
  margin-bottom: 0.5rem;
  font-weight: bold;  
`;

const Extra = styled.div`
  font-size: 2.5rem;
  font-weight: 300;
`;

const BackgroundImage = styled.svg`
  position: absolute;
  bottom: -6rem;
  right: 4rem;
  width: 30rem;
  height: 30rem;
  opacity: 0.2;
  stroke: #EEE;
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const Wrapper = styled.div`
  background-color: #360434;
  scroll-snap-align: start;
  display: block;
  position: relative;
  height: 100vh;
  padding: 5rem;
  scroll-snap-align: start;
  overflow: hidden;
  color: #EEE;
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
            <b>Ponadto, w moich projektach wykorzystuję</b><br/>
            ES6, REST API, <b>Git</b>, Eslint
          </Extra>
          <BackgroundImage>
            <use xlinkHref={`${feather}#layers`}/>
          </BackgroundImage>
      </Wrapper>
    )
  }
}