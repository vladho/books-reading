import Container from '../Container/Container';
import NavigationRoutes from '../Navigation/NavigationRoutes';

import books from '../../json/trainingListBooks.json';
import TrainingListItem from '../training/TrainingListItem';

const App = () => {
    return (
        <Container>
            <NavigationRoutes />

            <ul>
                {books.map(({ id, title, author, year, pages }) => (
                    <TrainingListItem
                        key={id}
                        title={title}
                        author={author}
                        year={year}
                        pages={pages}
                    />
                ))}
            </ul>
        </Container>
    );
};

export default App;
