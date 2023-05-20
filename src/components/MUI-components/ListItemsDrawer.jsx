import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import { useNavigate, useLocation } from "react-router-dom";

function ListItemsDrawer({ drawerValues, theme }) {
  const navigate = useNavigate();
  const location = useLocation();
  return (
    <>
      {drawerValues.map((value) => (
        <ListItem
          key={value.Text}
          disablePadding
          sx={{
            bgcolor:
              location.pathname === value.navigate
                ? theme.palette.grayColor.main
                : null
          }}
        >
          <ListItemButton
            onClick={() => {
              navigate(value.navigate);
            }}
          >
            <ListItemIcon>
              {value.Icon}
            </ListItemIcon>
            <ListItemText primary={value.Text} />
          </ListItemButton>
        </ListItem>
      ))}
    </>
  );
}

export default ListItemsDrawer;