// src/components/SequenceDisplay.js
import PropTypes from 'prop-types';
import * as C from './styles'

const Sequence = ({ sequence, currentIndex }) => {
  return (
    <C.Sequence>
      {sequence.map((char, index) => (
        <span key={index} 
        style={{
          color: index === currentIndex ? '#fff' : '#2F3349',
          backgroundColor: index === currentIndex ? '#eeca2b' : '#F0F0F0'
          }}>
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
