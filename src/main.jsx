import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import './App.css'
import App from './App.jsx'
import { BrowserRouter } from 'react-router-dom'
import { Provider } from 'react-redux'
//my error come because of store S should be captial it fetch the incorrect file
import { Store } from './redux/Store.js'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  //here we write the provider for the slices to be used and write the store 

  //BrowserRouter is the most important thing we have to do 
  <BrowserRouter>
    <Provider store={Store}>
      <App />
      {/* most important toaster should be present in main.js */}
      <Toaster/>
    </Provider>
  </BrowserRouter>
)
