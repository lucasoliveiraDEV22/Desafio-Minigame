import { styled } from 'styled-components';

export const Game = styled.div`
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem;
  background-color: #2F3349;
  padding: 2.5rem;
  border-radius: 1rem;
  width: 450px;
`;

export const Bg = styled.div`
  background-color: #e8f1ff7a;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(7px);
`;
