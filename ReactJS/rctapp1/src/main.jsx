import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Sitemaps from './Sitemap.jsx'

// import {Home,About} from './Home.jsx'
// import About from './about.jsx'
// import Contact from './Contact.jsx'
// import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    
    {/* <Home name='Jafer' age='21'/><About/> */}
    {/* <About name= 'Haider' age='19' city='Riyadh' email='hr9611@gmail.com'/> */}
    {/* <Contact name='Jafer' occupation='Senior software developer'/> */}
    {/* <App /> */}
    <Sitemaps/>

  </StrictMode>
)
