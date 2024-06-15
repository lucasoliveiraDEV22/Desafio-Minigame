import { styled } from 'styled-components';

export const Result = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  gap: 1rem;

  p {
    font-size: 1.2rem;
  }
 button {
    padding: 8px 12px;
    font-size: 1rem;
    cursor: pointer;
    border: none;
    border-radius: 5px;
    background-color: #eeca2b;
    color: #2F3349;
    font-weight: bold;
  }

  button:hover{
    opacity: 0.5;
  }
`;
