import { Alert, Snackbar } from "@mui/material";
import "./styles.css";

function Notify({ notify, setNotify }) {

    const handleClose = (event, reason) => {
        if (reason === 'clickaway') {
            return;
        }
        setNotify({ ...notify, open: false });
    };

    return (
        <Snackbar open={notify.open} autoHideDuration={6000} anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} onClose={handleClose}>
            <Alert onClose={handleClose} severity={notify.severity} variant="filled" sx={{ width: 400, height: 52 }}>
                {notify.message}
            </Alert>
        </Snackbar>
    )
}

export default Notify;