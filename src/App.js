import './App.css';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Header from './Component/Header/Header';
import Newform from './Component/Newform/Newform';
import Main from './Component/Main/Main'
import Error from './Component/Error/Error'; 


const Layout = () => (
  <div>
    <Header />
    <Outlet /> 
  </div>
);

const router = createBrowserRouter([
  {
    path: "/custom-form",
    element: <Layout />, 
    children: [
      {
        path: "/custom-form",
        element: <Newform />, 
      },
    ],
    errorElement: <Error />,
  },
  {
    path: "/main",
    element: <Layout />, 
    children: [
      {
        path: "/main",
        element: <Main />, 
      },
    ],
  },
 
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
      
    </div>
  );
}

export default App;
