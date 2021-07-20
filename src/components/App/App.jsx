import Container from '../Container/Container';
import NavigationRoutes from '../Navigation/NavigationRoutes';
import { Header, HeaderWrapper } from '../Header';
import ShowModal from '../ModalHoc/ShowModal/ShowModal';
import Timer from '../Timer/Timer';
import FirstVisit from '../ModalComponents/FirstVisit/FirstVisit';


const App = () => {
  return (
    <>
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>

      <Container>
        {/* <NavigationRoutes /> */}
        <ShowModal>
          <FirstVisit/>
        </ShowModal>
      </Container>
    </>
  );
};

export default App;
