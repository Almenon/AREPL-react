import * as React from 'react';
import { Link } from 'react-router-dom';
const styles = require('./Counter.css');

interface Props {
  increment: () => void;
  incrementIfOdd: () => void;
  incrementAsync: () => void;
  decrement: () => void;
  counter: number;
}

function Counter({increment, incrementAsync, incrementIfOdd, decrement, counter}:Props){
  return (
    <div>
      <div className={styles.backButton} data-tid="backButton">
        <Link to="/">
          <i className="fa fa-arrow-left fa-3x" />
        </Link>
      </div>
      <div className={`counter ${styles.counter}`} data-tid="counter">
        {counter}
      </div>
      <div className={styles.btnGroup}>
        <button className={styles.btn} onClick={increment} data-tclass="btn">
          <i className="fa fa-plus" />
        </button>
        <button className={styles.btn} onClick={decrement} data-tclass="btn">
          <i className="fa fa-minus" />
        </button>
        <button className={styles.btn} onClick={incrementIfOdd} data-tclass="btn">odd</button>
        <button
          className={styles.btn}
          // incrementAsync wrapped in function to preserve local scope
          onClick={() => incrementAsync()}
          data-tclass="btn"
        >async
        </button>
      </div>
    </div>
  );
}

export default Counter;