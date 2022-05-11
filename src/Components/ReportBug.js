import Sidebar from "./Sidebar";
import './ReportBug.css'
import { Button, Rating, TextField } from "@mui/material";
import { useState } from "react";
// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 

const ReportBug = () => {
    const [value, setValue] = useState(0);
    const [report, setReport] = useState("");

    // Firebase 

    const firebaseConfig = {
        apiKey: "AIzaSyCHmC5lEwP8pC4cLKUlEx3FadmEqjCZNcg",
        authDomain: "axecap-53057.firebaseapp.com",
        projectId: "axecap-53057",
        storageBucket: "axecap-53057.appspot.com",
        messagingSenderId: "185961007733",
        appId: "1:185961007733:web:fcadf9fa25d994ba88063c"
        };
    
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    
    const sendReport = () => {
        let feedback = {
            value: value,
            report: report
        }
        if(feedback){
            try {
                const docRef = addDoc(collection(db, "report"), {
                    value: value,
                    report: report
                });
                console.log("Document written with ID: ", docRef.id);
                console.log("Feedback recorded");
                console.log(feedback);
            } catch (e) {
            console.error("Error adding document: ", e);
            }
        }else{
            console.logo("For here?!")
        }
    }
    
    


    
    return ( 
        <div className="reportbug">
            <Sidebar />
            <main>
                <h1>Give feedback or report a bug</h1>
                <p>What do you think of my Axecap finance webpage?</p>
                <form>
                    {/* Ratingsss */}
                    <Rating name="half-rating" defaultValue={0} precision={1} 
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    />
                    <br />
                    {/* <label htmlFor="report">Do you have any comments you'd like to share?</label> */}
                    {/* <textarea name="report" id="report" cols="30" rows="10" placeholder="Your detailed message" value={report} onChange={e => setReport(e.target.value)}></textarea> */}
                    <TextField
                        id="outlined-multiline-static"
                        multiline
                        rows={4}
                        placeholder="Your detailed message"
                        fullWidth
                        className="reportbug__Textarea"
                        value={report} onChange={e => setReport(e.target.value)}
                    />
                    <Button variant="contained" onClick={sendReport}>
                        Send
                    </Button>
                </form>
            </main>
        </div>
     );
}
 
export default ReportBug;