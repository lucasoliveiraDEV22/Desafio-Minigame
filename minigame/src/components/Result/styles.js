import { styled } from 'styled-components';

export const Result = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  .result {
    margin: 20px;
  }

  .result p {
    font-size: 1.5em;
    margin: 10px 0;
  }

  .result button {
    padding: 10px 20px;
    font-size: 1em;
    cursor: pointer;
  }
`;
