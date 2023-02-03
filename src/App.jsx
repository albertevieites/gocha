// Import dependencies
import { Route, Routes } from 'react-router-dom';

import { BookmarkWrapper } from './contexts/BookmarkContext';

// Import page components
import Layout from './components/Layout/Layout';
import Home from './pages/Home/Home';

function App() {
  return (
    <div className='App'>
    <Layout>
      <BookmarkWrapper>
        <Routes>
          <Route path='/' element={<Home />} />
        </Routes>
      </BookmarkWrapper>
    </Layout>
    </div>
  );
}

export default App;
