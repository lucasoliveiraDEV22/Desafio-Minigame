// src/components/SequenceDisplay.js
import PropTypes from 'prop-types';
import * as C from './styles'

const Sequence = ({ sequence, currentIndex }) => {
  return (
    <C.Sequence className='sequence'>
      {sequence.map((char, index) => (
        <span key={index} className={index === currentIndex ? 'active' : ''}>
          {char}
        </span>
      ))}
    </C.Sequence>
  );
};

Sequence.propTypes = {
  sequence: PropTypes.node,
  currentIndex: PropTypes.number
};

export default Sequence;
