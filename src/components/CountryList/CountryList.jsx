import { Link, useLocation } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ country }) => {
  const location = useLocation();

  return (
    <>
      <Grid>
        {country.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <Link to={`/country/${id}`} state={location}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
