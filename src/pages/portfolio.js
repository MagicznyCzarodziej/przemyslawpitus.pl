import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import AboutSection from '../components/AboutSection';

const Wrapper = styled.div`
  height: 100vh;
  scroll-behavior: smooth;
  overflow-y: scroll;
  scroll-snap-type: y proximity;
`;

export default class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle/>
        <AboutSection/>
      </Wrapper>
    );
  }
}
