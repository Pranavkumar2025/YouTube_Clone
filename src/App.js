import "./index.css";
import Head from "./components/Head";
import Body from "./components/Body";
import { Provider } from "react-redux";
import myStore from "./utils/myStore";
import { createBrowserRouter } from "react-router-dom";

const AppRouter = createBrowserRouter([
  {
    path:'/',
    element:<Body/>,
    children:[
      {
        path:''
      }
    ]
  }
])



function App() {
  return (
    <Provider store={myStore}>
    <div>
      <Head/>
      <Body/>
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
