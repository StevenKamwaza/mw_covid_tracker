import * as React from 'react';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import DashboardIcon from '@mui/icons-material/Dashboard';
import AutoGraphTwoToneIcon from '@mui/icons-material/AutoGraphTwoTone';
import SsidChartTwoToneIcon from '@mui/icons-material/SsidChartTwoTone';
import TableChartTwoToneIcon from '@mui/icons-material/TableChartTwoTone';
import AssignmentIcon from '@mui/icons-material/Assignment';

export const mainListItems = (
  <React.Fragment>
    <ListItemButton>
      <ListItemIcon>
        <DashboardIcon />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <AutoGraphTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Malawi Cases" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TableChartTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Malawi Visual" />
    </ListItemButton>
    
  </React.Fragment>
);

export const secondaryListItems = (
  <React.Fragment>
    <ListSubheader component="div" inset>
      World Summary
    </ListSubheader>
    <ListItemButton>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="World Cases Graph" />
    </ListItemButton>
    <ListItemButton>
      <ListItemIcon>
        <TableChartTwoToneIcon />
      </ListItemIcon>
      <ListItemText primary="Table of Countries" />
    </ListItemButton>
    
  </React.Fragment>
);
