import React, { createContext } from 'react';

import { useLanguage } from '../../hooks/useLanguage';
import Container from '../Container/Container';
import NavigationRoutes from '../Navigation/NavigationRoutes';
import { Header, HeaderWrapper } from '../Header';

export const LangContext = createContext();

const App = () => {
  const [language, setLanguage, list] = useLanguage();

  return (
    <LangContext.Provider value={{ language, setLanguage, list }}>
      <HeaderWrapper>
        <Container>
          <Header />
        </Container>
      </HeaderWrapper>

      <NavigationRoutes />
    </LangContext.Provider>
  );
};

export default App;
