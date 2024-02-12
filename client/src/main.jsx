import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  App  from './App';
import ResultsPage from './pages/SearchCards.jsx';
import { SearchCards1 } from './pages/SearchCards1.jsx';
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
        element: <SearchCards1 />
      }, //{
      //   path: '/collection',
      //   element: <SavedCollection /},>
     {
        path: '/results/:searchTerm',
        element: <ResultsPage/>
      },
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
