import React from 'react';
import PropTypes from 'prop-types';
import Controls from '../Controls/Controls';
import styles from './Counter.module.css';

const Counter = ({ pageNumber, lastPage, onIncrement, onDecrement }) => (
  <>
    <p className={styles.counter}>
      {pageNumber}/{lastPage}
    </p>
    <Controls
      pageNumber={pageNumber}
      lastPage={lastPage}
      onIncrement={onIncrement}
      onDecrement={onDecrement}
    />
  </>
);
Counter.propTypes = {
  pageNumber: PropTypes.number.isRequired,
  lastPage: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
};
export default Counter;
