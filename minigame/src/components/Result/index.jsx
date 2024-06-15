import PropTypes from 'prop-types';
import * as C from './styles';

const Result = ({ result, onRestart }) => {
  return (
    <C.Result className='result'>
      <p>{result}</p>
      <button onClick={onRestart}>Reiniciar</button>
    </C.Result>
  );
};

Result.propTypes = {
  result: PropTypes.string,
  onRestart: PropTypes.any
};
export default Result;
