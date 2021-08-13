import styled from 'styled-components';

export const Container = styled.div`
    margin-top: 150px;
    align-items: center;
    justify-content: center;
    color: whitesmoke;
  img{
      height: 150px;
      width: 150px;
      border-radius: 50%;
  }

  p {
      width: 500px;
      margin: auto;
      margin-top: 15px;
  }
  .caligrafy {
      font-family: 'CollectionFree';
      font-size: 60px;
      font-weight: 400;
  }
  .bold {
    font-family: 'Pleasewritemeasong';
  }
  .presentation{
    font-family: sans-serif;
    font-size: 14px;
  }
`;

export const SocialContainer = styled.div`
    margin-top: 1em;
    font-size: 50px;
    .social{
        transition: 0.5s;
    }
    .social:hover { transform: scale(1.1); }
    .social + .social {
        margin-left: 15px;
    }
`
