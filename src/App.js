import logo from './logo.svg';
import './App.css';
// import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { createBrowserRouter ,RouterProvider } from 'react-router-dom';
import Page1 from './pages/page1';
import Page2 from './pages/page2';
import Page3 from './pages/page3';
import Home from './pages/home';
import Navbar from './components/navbar';
import Error from './pages/error';
import RootLayout from './components/rootlayout';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout/>,
    errorElement: <Error/>,
    children: [
      {path: '/', element: <Home/>},
      {path: '/page1', element: <Page1/>},
      {path: '/page2', element: <Page2/>},
      {path: '/page3', element: <Page3/>}
    ]
  }
])


function App() {
  return (
    <div className="App">
      {/* <BrowserRouter>
        <Navbar/>
        <Routes >
          <Route path='/' element={<Home/>} errorElement={<Error/>}/>
          <Route path='/page1' element={<Page1/>}/>
          <Route path='/page2' element={<Page2/>}/>
          <Route path='/page3' element={<Page3/>}/>
        </Routes>
      </BrowserRouter> */}
      <RouterProvider router={router}/>
    </div>
    
  );
}

export default App;
