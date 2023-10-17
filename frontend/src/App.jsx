import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
  Outlet,
} from "react-router-dom";
//pages
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';

export default App;

function App(){
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
      </Route>
    )
  )
  return(
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}