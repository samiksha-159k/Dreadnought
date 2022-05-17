
import './App.css';
import Account from './Components/Account';
import Chart from './Components/chart';

import { BrowserRouter, Route, Routes} from 'react-router-dom';


function App() {
  return (
    <div className="App">
     <BrowserRouter>

     <Routes>

          {/* <Route path='/Account' name='account' component={Account} exact/> */}
          <Route path='/chart' name='chart' element={<Chart/>} exact/>
          <Route path='/' element={<Account/>} />
          </Routes>
      </BrowserRouter>
 
   
    </div>
  );
}

export default App;
