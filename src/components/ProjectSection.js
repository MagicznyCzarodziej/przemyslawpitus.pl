import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  min-height: 100vh;
  padding: 2rem 2rem 0 2rem;
  font-size: 1.5rem;
  overflow: hidden;
  color: ${({ theme }) => theme === 'dark' ? '#EEE' : '#111'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (min-width: 1000px) {
    flex-direction: row;
    padding: 5rem 0 5rem 5rem;
    font-size: 2.5rem;
  }
`;

const ContentWrapper = styled.div`
  @media (min-width: 1000px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 60%;
  }
`;

const Header = styled.header`
  font-weight: bold;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const Description = styled.p`
  font-weight: 300;
  margin: 3rem 0;
  text-shadow: 0 3px 6px rgba(0, 0, 0, 0.15);
`;

const StyledButton = styled(Button)`
  margin-bottom: 1rem;
  display: block;
  font-size: 1.5rem;
  @media (min-width: 1000px) {
    font-size: 2rem;
    display: initial;
    margin-bottom: 0;
  }
`;

const Image = styled.div`
  background: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  height: 10rem;
  width: 100%;
  margin-top: 2rem;

  @media (min-width: 1000px) {
    position: absolute;
    margin-top: 0;
    background-size: contain;
    width: 100%;
    height: initial;
    top: 10rem;
    bottom: 10rem;
    left: calc(60% + 5rem);
  }
`;

export default class ProjectSection extends Component {
  render() {
    const { name, description, theme, backgroundColor, buttons, image } = this.props.project;
    return (
      <Wrapper
        id={this.props.id}
        theme={theme}
        backgroundColor={backgroundColor}
      >
        <ContentWrapper>
          <Header>
            {name}
          </Header>
          <Description theme={theme}>
            {description}
          </Description>
          <div>
            {buttons.map((value, index) => {
              const { label, icon, link } = value;
              return <StyledButton
                  key={index}
                  link={link}
                  icon={icon}
                  dark={theme === 'light'}
                  className="styled"
                >
                  {label}
                </StyledButton>
            })}
          </div>
        </ContentWrapper>  
        {image && <Image image={require(`../images/${image}`)}></Image>}
      </Wrapper>
    )
  }
}

ProjectSection.propTypes = {
  id: PropTypes.string,
  firstProject: PropTypes.bool,
  project: PropTypes.shape({
    name: PropTypes.string,
    description: PropTypes.element,
    theme: PropTypes.string,
    backgroundColor: PropTypes.string,
    buttons: PropTypes.arrayOf(PropTypes.shape({
      label: PropTypes.string,
      icon: PropTypes.string,
      link: PropTypes.string,
    })),
    image: PropTypes.string,
  }),
};
