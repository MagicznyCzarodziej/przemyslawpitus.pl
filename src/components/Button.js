import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components';
import feather from '../images/feather-sprite.svg';

const StyledLink = styled.a`
  border: 2px solid ${ props => props.dark ? '#111' : '#EEE' };
  padding: 0.5rem 1rem;
  display: inline-block;
  align-items: center;
  text-decoration: none;
  margin-right: 2rem;
  color: ${ props => props.dark ? '#111' : '#EEE' };
  :hover {
    background-color: ${ props => props.dark ? '#111' : '#EEE' };
    color: ${ props => props.dark ? '#EEE' : '#111' };
  }
`;

const StyledSvg = styled.svg`
  width: 2rem;
  height: 2rem;
  stroke: ${ props => props.dark ? '#111' : '#EEE' };
  stroke-width: 2;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
  margin-right: 1rem;
  ${StyledLink}:hover & {
    stroke: ${ props => props.dark ? '#EEE' : '#111' };
  }
`;

const Text = styled.span`
  font-weight: 300;
`;

export default class Button extends Component {
  render() {
    const { link, dark, icon, children } = this.props;
    return (
      <StyledLink href={link} dark={dark}>
        <StyledSvg dark={dark}>
          <use xlinkHref={`${feather}#${icon}`}/>
        </StyledSvg>
        <Text dark={dark}>{children}</Text>
      </StyledLink>
    )
  }
}

Button.propTypes = {
  link: PropTypes.string,
  icon: PropTypes.string,
  children: PropTypes.string,
  dark: PropTypes.bool,
};
