import './Info.css'
import Sidebar from "./Sidebar";

const Info = () => {
    return ( 
        <div className="info">
            <Sidebar />
            <main>
                <p>This project is powered by ReactJs, react router, firebase, and Yahoo finance API</p>
                <h1>About me</h1>
                <p>After 8 months hiatus from active coding, I return with this elegant finance dashboard inspired by Billions Showtime..powered by the technologies above.</p>
            </main>
        </div>
     );
}
 
export default Info;