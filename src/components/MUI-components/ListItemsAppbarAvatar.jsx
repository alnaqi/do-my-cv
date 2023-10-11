
import { MenuItem, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

function ListItemsDrawer({ settings, handleCloseUserMenu }) {
    const navigate = useNavigate();

    return (
        <>
            {settings.map((setting) => (
                <MenuItem key={setting.text} onClick={() => {
                    {setting.handleAuth && setting.handleAuth()}
                    handleCloseUserMenu()
                    navigate(setting.navigate)
                }}>
                    <Typography textAlign="center">{setting.text}</Typography>
                </MenuItem>
            ))}
        </>
    );
}

export default ListItemsDrawer;