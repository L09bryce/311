import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter , Route,Routes} from 'react-router-dom'
import Login from './LoginPage/Login.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    {/* const [sidebarToggle, setSidebarToggle] = useState(false) */}
    <BrowserRouter>
    <Routes>
    <Route path='/login' element={<Login />}/>
    {/* <Route path='/' element={<App />}/> */}

      
    </Routes>   
    
    <App />
    </BrowserRouter>
    
  </StrictMode>,
)
