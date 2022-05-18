import Sidebar from "./Sidebar";
import './ReportBug.css'
import { Button, Rating, Snackbar, TextField } from "@mui/material";
import { useState } from "react";
// import CloseIcon from '@mui/icons-material/Close';
// Firebase
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { collection, addDoc } from "firebase/firestore"; 
import { useMediaQuery } from "@mui/material";

const ReportBug = () => {
    const [value, setValue] = useState(0);
    const [report, setReport] = useState("");
    // Reverse logic. because I was lazy
    const [inputFocus, setInputFocus] = useState(true);

    // Snackbar code
    const [open, setOpen] = useState(false);

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
        return;
        }

        setOpen(false);
    };

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
                    rating: value,
                    report: report
                });
                console.log(docRef.id);
                // console.log("Document written with ID: ", docRef.id);
                console.log("Feedback recorded");
                setReport('')
                setOpen(true);

                // console.log(feedback);

            } catch (e) {
            console.error("Error adding document: ", e);
            }
        }else{
            console.logo("For here?!")
        }
    }
    
    
    const matches = useMediaQuery('(max-width: 850px)');

    
    return ( 
        <div className="reportbug">
            {inputFocus? <Sidebar /> : <span></span>}
            {/* {matches? <Sidebar /> : matches && inputFocus)? <Sidebar />} */}
            <main>
                <h1>Give feedback or report a bug</h1>
                <p>What do you think about my Crypto Watch?</p>
                <form>
                    {/* Ratingsss */}
                    <Rating name="half-rating" defaultValue={0} precision={1} 
                    value={value}
                    onChange={(event, newValue) => {
                      setValue(newValue);
                    }}
                    />
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
                        onFocus={() => (matches? setInputFocus(false) : setInputFocus(true))}
                        onBlur={() => (matches? setInputFocus(true) : setInputFocus(true))}
                    />
                    <Button variant="contained" onClick={sendReport}>
                        Send
                    </Button>
                    <Snackbar
                    open={open}
                    autoHideDuration={3000}
                    onClose={handleClose}
                    message="Thanks for your feedback"
                    action={
                        <div>
                            <ion-icon 
                            name="close-outline" 
                            onClick={handleClose} 
                            style={{
                                fontSize: '1.4rem', 
                                fontWeight: '600', 
                                cursor: 'pointer'
                            }}></ion-icon>
                        </div>
                    }
                    />
                </form>
            </main>
        </div>
     );
}
 
export default ReportBug;