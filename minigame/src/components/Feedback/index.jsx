// src/components/Feedback.js
import * as C from './styles';
import PropTypes from 'prop-types'
function Feedback({ feedback }) {
  return <C.Feedback className='feedback'>{feedback}</C.Feedback>;
}

Feedback.propTypes = {
  feedback: PropTypes.string.isRequired
}

export default Feedback;


