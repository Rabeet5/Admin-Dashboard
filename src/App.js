import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import AllRouters from './pages/screens/Allrouters';
import SMSelect from './pages/Components/SMSelectBox';


function App() {
  return (<>

    <SMSelect label='Select this' val='Rabeet'  /> <br />
    <AllRouters />
  </>



  );
}

export default App;
