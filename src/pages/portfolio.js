import React, { Component } from 'react';
import styled from 'styled-components';
import GlobalStyle from '../components/GlobalStyle';
import AboutSection from '../components/AboutSection';
import TechnologiesSection from '../components/TechnologiesSection';
import ProjectSection from '../components/ProjectSection';
import ContactSection from '../components/ContactSection';

const Wrapper = styled.div`
  height: 100vh;

  @media (min-width: 1000px) {
    scroll-behavior: smooth;
  }
`;

const ProjectsHeader = styled.div`
  padding: 2rem;
  background-color: #111;
  font-size: 2rem;
  color: #EEE;
  @media (min-width: 1000px) {
    padding: 2rem 5rem;
    font-size: 3rem;
  }
`;

const projects = [
  {
    name: 'RolkaBot',
    description: <>
      Bot do Discorda umożliwiający szybkie i wygodne rzucanie kośćmi do gier RPG<br/><br/>
      
      Napisany przy użyciu <b>Typescript</b>, hostowany 24/7 na <b>Heroku</b>
    </>,
    image: 'rolkabot.png',
    buttons: [
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/RolkaBot'},
    ],
    theme: 'dark',
    backgroundColor: '#36393F',
  },
  {
    name: 'Feastly',
    description: <>
      Zbieracz feedów RSS.<br/>
      Zaloguj się, dodaj źródła RSS i zbierz
      wszystkie najnowsze wiadomości w jednym
      miejscu.<br/><br/>
      Frontend: <b>Vue.js</b> + Vuex<br/>
      Backend: Node.js, Express, <b>JWT</b>, <b>Mongoose</b><br/>
      Obustrona walidacja: <b>VeeValidate</b>, <b>express-validator</b>
    </>,
    image: 'feastly.png',
    buttons: [
      { label: 'Demo', icon: 'external-link', link: 'http://feastly.przemyslawpitus.pl'},
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/Feastly'},
    ],
    theme: 'dark',
    backgroundColor: '#090909',
  },
  {
    name: 'Mamy Szpiega',
    description: <>
      Internetowa wersja gry towarzyskiej Spyfall,
      zapewniła mi i przyjaciołom godziny świetnej zabawy.<br/>
      Całość śmiga na <b>Socket.io</b>.
    </>,
    image: 'mamyszpiega.png',
    buttons: [
      { label: 'Demo', icon: 'external-link', link: 'http://mamyszpie.ga'},
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/spyfall'},
    ],
    theme: 'light',
    backgroundColor: '#EEE',
  },
  {
    name: 'Memedex',
    description: <>
      Wyszukiwarka obrazków na podstawie tagów.
      Klient dodaje plik graficzny i odpowiednie tagi,
      obrazek zostaje uploadowany przez <b>Imgur API</b>.
      Link i tagi zapisywane są na serwerze.<br/><br/>
      Frontend: <b>Vue.js</b>, axios<br/>
      Backend: Node.js, Express, <b>Mongoose</b>
    </>,
    image: 'memedex.png',
    buttons: [
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/memefinder'},
    ],
    theme: 'light',
    backgroundColor: '#CED4F5',
  },
  {
    name: 'Program Indeksujacy Tylko Uczniowskie Szafki (P.I.T.U.S.)',
    description: <>
    Aplikacja desktopowa (<b>Electron</b>), do zarządzania szafkami w szkolnej szatni,
    którą napisałem dla mojego technikum.
    </>,
    image: 'pitus.png',
    buttons: [
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/pitus'},
    ],
    theme: 'dark',
    backgroundColor: '#1AB698',
  },
  {
    name: 'Next Launch',
    description: <>
      Prosta strona pokazująca najbliższe starty rakiet, korzystając z LaunchLibrary API.<br/><br/>
      Pierwszy krok w nauce <b>Reacta</b> i <b>styled-components</b><br/><br/>

      <b>Continuous deployment</b> na Netlify
    </>,
    image: 'nextlaunch.png',
    buttons: [
      { label: 'Demo', icon: 'external-link', link: 'http://nextlaunch.netlify.com'},
      { label: 'Github', icon: 'github', link: 'https://github.com/MagicznyCzarodziej/nextlaunch'},
    ],
    theme: 'dark',
    backgroundColor: '#2F5BA7',
  },
]

export default class Portfolio extends Component {
  render() {
    return (
      <Wrapper>
        <GlobalStyle/>
        <AboutSection/>
        <TechnologiesSection/>
        <ProjectsHeader id="projects">Wybrane projekty</ProjectsHeader>
        {projects.map((project, index) => {
          return <ProjectSection
            // {...(index === 0 ? {id: 'projects', firstProject: true} : {})}
            project={project}
            key={index}
          />
        })}
        <ContactSection/>
      </Wrapper>
    );
  }
}
