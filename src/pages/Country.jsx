import { Container, Heading, Section, CountryInfo, Loader } from 'components';
import { fetchCountry } from '../service/countryApi';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';

export const Country = () => {
  const { countryId } = useParams();
  const [contry, setContry] = useState({});
  const [error, setError] = useState(null);
  const [loader, setLoader] = useState(false);
  useEffect(() => {
    async function getContry() {
      setLoader(true);
      try {
        const response = await fetchCountry(countryId);
        setContry(response);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoader(false);
      }
    }
    getContry();
  }, [countryId]);

  return (
    <Section>
      {loader && <Loader />}
      <Container>
        {error && <Heading title={error} bottom />}
        <CountryInfo {...contry} />
      </Container>
    </Section>
  );
};
