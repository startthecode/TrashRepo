import {
  Collapse,
  List,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import React, { useState } from "react";

const Sidebar = () => {
  let [open, setOpen] = useState<Record<string,boolean>>({});

  function handleClick(keyName:string){
   return ()=> setOpen({...open,[keyName]:!open[keyName]})
  }
  
  return (
    <div className="h-screen max-w-[300px] bg-red-700">
      <ListItemButton onClick={handleClick('home')}>
        <ListItemIcon>{/* <InboxIcon /> */}</ListItemIcon>
        <ListItemText primary="Inbox" />
        {open ? `>` : "<"}
      </ListItemButton>
      <Collapse in={open.home} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          <ListItemButton sx={{ pl: 4 }}>
            <ListItemIcon>
              {/* <StarBorder /> */}
            </ListItemIcon>
            <ListItemText primary="Starred" />
          </ListItemButton>
        </List>
      </Collapse>
    </div>
  );
};

export default Sidebar;
