import './App.css';
import StudentList from './components/StudentList';
import ReactState from "./components/ReactState";
import Clock from "./components/Clock";
import ServerConnecttion from "./components/ServerConnecttion";

function App() {

  return (

    <>

        <ServerConnecttion></ServerConnecttion>

        <ReactState></ReactState>

        <StudentList></StudentList>

        <Clock></Clock>


    </>

);
}


export default App
