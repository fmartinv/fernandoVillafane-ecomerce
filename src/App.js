import './App.css'
import Nabvar from './components/Navbar/Navbar'

import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import 'bootstrap/dist/css/bootstrap.min.css'
function App() {
  return (
    <div className='App'>
      <Nabvar />
      <ItemListContainer />
    </div>
  )
}

export default App
