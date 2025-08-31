import Header from './Header';
import MainContent from './MainContent';
import Sidebar from './Sidebar';
import Article from './Article';
import Footer from './Footer';
import './index.css';

function App() {
  return (
    <div className='app'>
      <Header />
      <MainContent />
      <Sidebar/>
      <Article/>
      <Footer />
      
    </div>
  );
}

export default App;