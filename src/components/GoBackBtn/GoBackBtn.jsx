import { Link } from 'react-router-dom';
import styles from './GoBackBtn.module.css';

export const GoBackBtn = ({ pass = '/' }) => {
  return (
    <>
      <Link className={styles.link} to={pass}>
        {' '}
        Go back button
      </Link>
    </>
  );
};
