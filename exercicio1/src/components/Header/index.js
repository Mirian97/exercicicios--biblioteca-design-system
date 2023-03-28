import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';
import bagIcon from "../../assets/bag-icon.svg";
import "./styles.css";

export default function Header() {
    const navigate = useNavigate();

    return (
        <Box>
            <AppBar position="static">
                <Toolbar variant="dense" sx={{ bgcolor: "#434343", p: "12px 16px" }}>
                    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>
                        <img
                            src={bagIcon}
                            alt="Sacola de compras"
                            onClick={() => navigate("/")}
                        />
                    </IconButton>
                    <Typography variant="h5" color="#AAA5A5" component="div">
                        MARKET CUBOS
                    </Typography>
                </Toolbar>
            </AppBar>
        </Box>
    )
};