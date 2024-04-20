import "./index.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myStore from "./utils/myStore";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:'/',
        element:<MainContainer/>
      },
      {
        path:'watch',
        element:<WatchPage/>
      },
    ],
  }
])

function App() {
  return (
    <Provider store={myStore}>
    <div>
      <Head/>
      <RouterProvider router={AppRouter}/>
    </div>
    </Provider>
  );
}

/** 
Head
Body
   SideBar
      MenuItems
   MainContainer
      ButtonList
      VideoContainer
        VideoCard
*/


export default App;
