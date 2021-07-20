import Container from '../Container/Container';
import NavigationRoutes from '../Navigation/NavigationRoutes';
import { Header, HeaderWrapper } from '../Header';

const App = () => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>

      <Container>
        <NavigationRoutes />
      </Container>
    </>
  );
};

export default App;
