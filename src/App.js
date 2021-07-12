import logo from './logo.svg';
import './App.css';
import Navi from './layout/navi/Navi';
import "antd/dist/antd.css"
import Content from './layout/content/Content';
function App() {
  return (
    <div className="App">
  <Navi></Navi>
  <Content></Content>
    </div>
  );
}

export default App;
