import './App.css'
import { useState } from 'react'
import Header from './components/Header'
import Sidebar from './components/sidebar/Sidebar'
import Main from './components/Main'

function App() {
   const [menuCollapse, setMenuCollapse] = useState(true)

   const menuIconClick = () => {
      menuCollapse ? setMenuCollapse(false) : setMenuCollapse(true)
   }

   return (
      <div className="App">
         <Header menuIconClick={menuIconClick} />
         <Sidebar menuCollapse={menuCollapse} />
         <Main />
      </div>
   )
}

export default App
