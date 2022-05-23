import { ListItem, ListItemButton, ListItemIcon, ListItemText, Tooltip } from "@mui/material"
import React from "react"
import { useRouter } from 'next/router';


interface Props {
  Text: string
  Icon: any
}

export function MuiListItem({icon, text, tooltip, action}: { icon: React.ReactNode, text: string, tooltip: string, action: any }) {
    let router = useRouter()
    return (
        <ListItem disablePadding>
            <Tooltip title={tooltip}>
            <ListItemButton onClick={action}>
              <ListItemIcon>
                {icon}
              </ListItemIcon>
              <ListItemText>{text}</ListItemText>
            </ListItemButton>
            </Tooltip>
        </ListItem>
    )
}

export default MuiListItem