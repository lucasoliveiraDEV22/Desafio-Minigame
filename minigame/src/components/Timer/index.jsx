import PropTypes from 'prop-types'
import * as C from './styles'

const Timer = ({ timeLeft }) => {
  return (
    <C.Timer className="timer">
      Tempo Restante: {timeLeft}s
    </C.Timer>
  );
};


Timer.propTypes = {
    timeLeft : PropTypes.number
}
export default Timer;