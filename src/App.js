import "./App.css";
import Sidebar from "./Sidebar";
import Chat from "./Chat";

const App = () =>  {

  return (
    <div className="app"> 
        <div className="app_body">
          <Sidebar/>
          <Chat />
        </div>
    </div>
  );
}

export default App;