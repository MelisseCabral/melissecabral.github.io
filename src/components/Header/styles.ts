import styled from 'styled-components';

export const Navbar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(0, 0, 0, 0.1);
  color: whitesmoke;
  height: 4em;

    button + button {
        margin-left: 15px;
    }
`;

export const MenuItem = styled.button`
    background-color: transparent;
    color: white;
    font-size: 16px;
    font-weight: 600;
    border: 0;
    font-family: sans-serif;
    text-transform: uppercase;
    transition: 0.5s;
    :hover { transform: scale(1.1); }
`;