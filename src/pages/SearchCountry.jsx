import {
  Container,
  CountryList,
  Heading,
  SearchForm,
  Section,
} from 'components';
import { useEffect, useState } from 'react';
import { fetchByRegion } from '../service/countryApi';

export const SearchCountry = () => {
  const [region, setRegion] = useState('');
  const [countres, setCountres] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (!region) return;
    async function search() {
      try {
        const respons = await fetchByRegion(region);
        setCountres(respons);
      } catch (error) {
        setError(error.message);
      }
    }

    search();
  }, [region]);

  const handleChangeRegion = region => {
    setRegion(region);
    setError(null);
  };
  return (
    <Section>
      <Container>
        {error && <Heading title={error} bottom />}
        <SearchForm onSubmit={handleChangeRegion} />
        <CountryList country={countres} />
      </Container>
    </Section>
  );
};
