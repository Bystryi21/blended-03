import styles from './CountryInfo.module.css';
import { GoBackBtn } from '../GoBackBtn/GoBackBtn';
import { useLocation } from 'react-router-dom';

export const CountryInfo = ({
  flag,
  capital,
  countryName,
  languages = [],
  population,
}) => {
  const location = useLocation();
  console.log(location);

  return (
    <>
      <GoBackBtn pass={location.state} />
      <div className={styles.wrapper}>
        <div className={styles.flag}>
          <img className={styles.img} src={flag} alt={countryName} />
        </div>
        <div className={styles.box}>
          <h3 className={styles.capital}>
            Capital: <span className={styles.accent}>{capital}</span>
          </h3>

          <h1 className={styles.title}>
            {countryName === 'Russian Federation' ? 'MORDOR' : countryName}
          </h1>

          <p className={styles.details}>
            Population: <span className={styles.accent}>{population}</span>
          </p>

          <p className={styles.details}>
            Languages:{' '}
            <span className={styles.accent}>{languages.join(', ')}</span>
          </p>
        </div>
      </div>
    </>
  );
};
