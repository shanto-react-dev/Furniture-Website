import './App.css'
// ------ All Routes Import From React-Router
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router'
// ------ Layouts & Pages Import
import Layout1 from './Layouts/Layout1'
import Home from './Pages/Home'

function App() {

  // ------ Create Routes From React-Router
  const myroutes = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path='/' element={<Layout1 />} >
          <Route index element={<Home />} />
        </Route>
      </Route>
    )
  )
  
  return (
    <>
      {/*------ Router Provider From React-Router ------*/}
      <RouterProvider router={myroutes} />
    </>
  )
}

export default App
