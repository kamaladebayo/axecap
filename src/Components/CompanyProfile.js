import Sidebar from "./Sidebar";
import './CompanyProfile.css'
const Company = () => {
    return ( 
        <div className="company">
            <Sidebar />
            <main>
                <h1>Axe Capital</h1>
                <p>Axe Capital is a $10 billion hedge fund owned by the billionaire Bobby Axelrod in the Showtime series, Billions.</p>
                <p>Billions is a complex drama about power politics in the world of New York high finance. Shrewd, savvy U.S. Attorney Chuck Rhoades and the brilliant, ambitious hedge fund king Bobby "Axe" Axelrod are on an explosive collision course, with each using all of his considerable smarts, power and influence to outmaneuver the other. The stakes are in the billions in this timely, provocative series.</p>
                <ul>
                    <li>"Billions" is a series about a billionaire hedge fund king who's constantly trying to tilt the capital markets in his favor.</li>
                    <li>The show exposes viewers to the genius and dirty tricks of hedge fund managers, as well as the relentless pursuit of these managers by U.S. attorneys.</li>
                    <li>It offers a look into the way financial markets work at the extremes, and how the system is played by its richest participants.</li>
                </ul>
            </main>
        </div>
     );
}
 
export default Company;