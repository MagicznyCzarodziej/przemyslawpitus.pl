import React, { Component } from 'react'
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Button from '../components/Button';

const Wrapper = styled.div`
  min-height: 100vh;
  scroll-snap-align: start;
  padding: 5rem 0 5rem 5rem;
  font-size: 2.5rem;
  overflow: hidden;
  color: ${({ theme }) => theme === 'dark' ? '#EEE' : '#111'};
  background-color: ${({ backgroundColor }) => backgroundColor};
  display: flex;
  position: relative;
`;

const ProjectsHeader = styled.div`
  position: absolute;
  padding: 2rem 5rem;
  background-color: #262626;
  font-size: 3.5rem;
  left: 0;
  top: 0;
`;

const ContentWrapper = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  justify-content: center;
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

const Image = styled.div`
  position: absolute;
  width: 100%;
  top: 10rem;
  bottom: 10rem;
  left: calc(60% + 5rem);
  background: url(${props => props.image});
  background-size: contain;
  background-repeat: no-repeat;
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
        {this.props.firstProject && <ProjectsHeader>Wybrane projekty</ProjectsHeader>}
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
              return <Button
                  key={index}
                  link={link}
                  icon={icon}
                  dark={theme === 'light'}
                >
                  {label}
                </Button>
            })}
          </div>
        </ContentWrapper>  
        <Image image={require(`../images/${image}`)}></Image>
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
