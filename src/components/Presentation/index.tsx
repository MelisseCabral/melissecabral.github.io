import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { Container, SocialContainer } from './styles';

function Presentation() {

  return (
    <Container>
        <img src="https://avatars.githubusercontent.com/u/9977351?v=4"/>
        <p className="caligrafy">
            Melisse Cabral 
        </p>
        <p className="bold">
          Software Enginner
        </p>
        <p className="presentation">
          I'm a fullstack developer delighted with JavaScript and for the reach of the platform since my first congress in 2015. 
          Since then I seek to deepen my knowledge in the great technology that has changed the way of programming the Web. Besides that 
          I am also interested in other programming languages and technologies, also looking to learn something that could improve my skills as a professional and as a person.
        </p>
        <SocialContainer>
          <FaGithub className='social' onClick={()=> window.open("https://github.com/MelisseCabral", "_blank")} />
          <FaLinkedin className='social' onClick={()=> window.open("https://www.linkedin.com/in/melissecabral", "_blank")}/>
        </SocialContainer>
    </Container>
  );
}

export default Presentation;