import { Container, CountryList, Heading, Section } from 'components';
import { getCountries } from 'service/countryApi';
import { useEffect, useState } from 'react';

export const Home = () => {
  const [country, setCountry] = useState([]);
  const [error, setError] = useState(null);
  useEffect(() => {
    async function getData() {
      try {
        const response = await getCountries();
        setCountry(response);
      } catch (error) {
        setError(error.message);
      }
    }
    getData();
  }, []);

  return (
    <Section>
      <Container>{error && <Heading title={error} bottom />}</Container>
      <CountryList country={country} />
    </Section>
  );
};
