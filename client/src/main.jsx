import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'


import App from './App.jsx'
import { SearchCards } from './pages/SearchCards.jsx'
import { SingleCardDisplay } from './components/SingleCardDisplay.jsx'
//import SavedCollection from './pages/SavedCollection'
//import Sets from './pages/Sets.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <h1 className='display-2'>Wrong page!</h1>,
    children: [
      {
        index: true,
        element: <SearchCards />
      }, //{
      //   path: '/collection',
      //   element: <SavedCollection />
      // }, {
      //   path: '/SingleCard',
      //   element: <SingleCardDisplay/>
      // }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
