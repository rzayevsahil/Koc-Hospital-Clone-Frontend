import './App.css';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'antd/dist/antd.css';
import Navi from './layout/navi/Navi';
import Content from './layout/content/Content'

function App() {
  return (
    <div className="App">
      <Navi/>
      <Content/>
      </div>
  );
}
export default App;