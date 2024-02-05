import './App.css';
// import {createBrowserRouter, RouterProvider} from 'react-router-dom';
import Header from '../src/components/header/Header.js';
import Banner from '../src/components/banner/Banner.js';
import Posts from '../src/components/posts/Posts.js';
function App() {

  // const browserRouter=createBrowserRouter([
  //   {
  //     path:'/',
  //     element:<Header/>,
  //   }
  // ])

  return (
    // <div className="App">
    //   <RouterProvider router={browserRouter}></RouterProvider>
    // </div>
    <div>
      <Header />
      <Banner />
      <Posts />
    </div>
  );
}

export default App;
