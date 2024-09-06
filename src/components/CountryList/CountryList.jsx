import { Link } from 'react-router-dom';
import { Grid, GridItem } from '..';

export const CountryList = ({ country }) => {
  return (
    <>
      <Grid>
        {country.map(({ id, country, flag }) => (
          <GridItem key={id}>
            <Link to={`/country/${id}`}>
              <img src={flag} alt={country} />
            </Link>
          </GridItem>
        ))}
      </Grid>
    </>
  );
};
