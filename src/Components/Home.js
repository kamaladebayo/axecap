import Sidebar from "./Sidebar";
import './Home.css'
import Main from "./Main";
import Actions from "./Actions";

const Home = () => {
    return ( 
        <div className="home">
            <Sidebar />
            <Main />
            <Actions />
        </div>
     );
}
 
export default Home;