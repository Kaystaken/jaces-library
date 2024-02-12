import ReactDOM from 'react-dom/client';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import  App  from './App';
import ResultsPage from './pages/SearchCards.jsx';
import RandomCommanderList from './pages/RandomCommander.jsx';
import Details from './pages/Details.jsx';
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
        element: <RandomCommanderList/>
      }, //{
      //   path: '/collection',
      //   element: <SavedCollection /},>
     {
        path: '/results/:searchTerm',
        element: <ResultsPage/>
      },
      {
        path: '/details/:cardId',
        element: <Details/>
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
