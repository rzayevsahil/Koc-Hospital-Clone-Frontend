import './App.css';
import Footer from './layouts/footer/Footer';
import HomePage from './layouts/homepage/HomePage';
import Navi from './layouts/nav/Navi';

function App() {
  return (
    <div className="App">
     <Navi></Navi>
<HomePage></HomePage>
<Footer></Footer>
      </div>
  );
}
export default App;