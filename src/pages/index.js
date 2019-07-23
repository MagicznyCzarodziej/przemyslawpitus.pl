import React from 'react';
import Helmet from 'react-helmet';
import { Link } from 'gatsby';
import logo from '../images/logo.svg';
import styled from 'styled-components';
import { createGlobalStyle, css } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    font-family: Montserrat, sans-serif;
    height: 100%;
  }
  html,
  #___gatsby,
  #gatsby-focus-wrapper {
    height: 100%;
  }
`;

const Container = styled.div`
  min-height: 100%;
  background-color: #EEE;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  @media (min-width: 900px) {
    padding: 8rem;
  }
`;

const StyledHeader = styled.header`
  text-transform: uppercase;
  font-weight: bold;
  color: #111;
  svg {
    width: 100%;
    @media (min-width: 900px) {
      display: none;
    }
  }
`;

const DesktopHeader = styled.span`
  display: none;
  @media (min-width: 900px) {
    font-size: 5.2rem;
    letter-spacing: 4px;
    display: initial;
  }
`;

const LogoWrapper = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  @media (min-width: 900px) {
    flex: initial;
    display: initial;
  }
`;

const Logo = styled.img`
  height: 60%;
  opacity: 0.05;
  @media (min-width: 900px) {
    height: 40vh;
    position: fixed;
    bottom: 0;
    right: 12rem;
    opacity: 1;
  }
`;

const Menu = styled.ul`
  text-transform: uppercase;
  list-style-type: none;
  span {
    display: inline-block;
    position: relative;
  }
  @media (min-width: 900px) {
    margin-top: 3rem;
  }
`;

const StyledLi = styled.li`
  margin: 1.5rem 0;
  font-size: 1.8rem;
  font-weight: 400;
  &:last-child {
    margin-bottom: 0;
  }
  @media (min-width: 900px) {
    margin: 0.5rem 0;
    font-size: 3rem;
    font-weight: 300;
  }
`;

const LinkStyle = css`
  text-decoration: none;
  color: #111;
  :after {
    position: absolute;
    width: 100%;
    display: block;
    content: '';
    border-bottom: solid 2px #111;  
    transform: scaleX(0);  
    transition: transform 250ms ease-in-out;
  }
  :hover:after {
    transform: scaleX(1);
  }
  :after{  transform-origin:  0% 50%; }
`;

const StyledLink = styled(Link)`
  ${LinkStyle}
`;

const StyledA = styled.a`
  ${LinkStyle}
`;

const IndexPage = () => (
  <>
    <Helmet>
      <title>Przemysław Pitus</title>
    </Helmet>
    <GlobalStyle/>
    <Container>
      <StyledHeader>
        <DesktopHeader>Przemysław Pitus</DesktopHeader>
        <svg viewBox="0 0 120 35">
          <text x="0" y="15">Przemysław</text>
          <text x="0" y="34">Pitus</text>
        </svg>
      </StyledHeader>
      <LogoWrapper>
        <Logo src={logo} alt="Logo"/>
      </LogoWrapper>
      <Menu>
        <StyledLi>
          <span><StyledA href="https://github.com/MagicznyCzarodziej">Github</StyledA></span>
        </StyledLi>
        <StyledLi>
          <span><StyledA href="http://mamyszpie.ga">Mamy Szpiega</StyledA></span>
        </StyledLi>
        <StyledLi>
          <span><StyledLink to="/portfolio">Portfolio</StyledLink></span>
        </StyledLi>
      </Menu>
    </Container>
  </>
)

export default IndexPage
