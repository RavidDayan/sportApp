import {
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
  Route,
} from "react-router-dom";
//pages
import Home from './pages/home.jsx';
import Login from './pages/login.jsx';
import ProgramWrapper from "./components/ProgramWrapper.jsx";
import CurrentProgram from "./pages/CurrentProgram.jsx";
import AddNewProgram from "./pages/AddNewProgram.jsx";
import ProgramHistory from "./pages/ProgramHistory.jsx";

export default App;

function App(){
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route path='/'>
        <Route index element={<Login/>}/>
        <Route path='home' element={<Home/>}/>
        <Route path='currentProgram' 
          element={<ProgramWrapper wrapped={<CurrentProgram/>}/>}/>
        <Route path='newProgram' 
          element={<ProgramWrapper wrapped={<AddNewProgram/>}/>}/>
        <Route path='programHistory' 
          element={<ProgramWrapper wrapped={<ProgramHistory/>}/>}/>
        {/* <Route path='diets' element={<Diet/>}/>  */}
      </Route>
    )
  )
  return(
    <main>
      <RouterProvider router={router}/>
    </main>
  )
}