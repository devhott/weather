import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home';

import Modal from 'react-modal'
Modal.setAppElement('#root')
function App() {
 
  return (
    <div className="App">
<Routes>
  <Route path='/'element={<Home/>}/>
</Routes>
    </div>
  );
}

export default App;
