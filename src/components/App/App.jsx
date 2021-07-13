import Container from '../Container/Container';
import NavigationRoutes from '../Navigation/NavigationRoutes';
import TrainingPage from '../../pages/TrainingPage';

const App = () => {
    return (
        <Container>
            <NavigationRoutes />
            <TrainingPage />
        </Container>
    );
};

export default App;
