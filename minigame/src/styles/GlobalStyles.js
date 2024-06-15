import { createGlobalStyle } from 'styled-components';
import image from '../assets/img/cidade-alta-logo.webp';

export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    text-decoration: none;
    transition: 0.5s ease-in-out;

}
body{
    font-family: "Open Sans", sans-serif;
    font-optical-sizing: auto;
    font-style: normal;
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #212833;
    background-image: url(${image});
    background-position: center;
    background-repeat: no-repeat;

}

`;
