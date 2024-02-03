import { Section, Title, Description, Welcome } from './Home.styled';
import car from '../../images/330i_sedan.jpeg';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <Section $url={car && `url(${car})`}>
      <div className="container">
        <Welcome>
          <Title>
            Welcome to Rental Car, you will find the best car with us!
          </Title>
          <Description>
            Go to <Link to={'/catalog'}>Catalog</Link>
          </Description>
        </Welcome>
      </div>
    </Section>
  );
};

export default Home;
