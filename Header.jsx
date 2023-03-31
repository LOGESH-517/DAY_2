import React from 'react'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import TypoGraphy from '@material-ui/core/Typography'
import AppBar from '@material-ui/core/AppBar';
import { Toolbar } from '@material-ui/core';
import './Style.css';
 function Header() {
  return (
    <div>
        <AppBar color="primary" position="static">

<Toolbar>
        <h2 ><img src="data:image/jpeg;base64,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" alt="My Logo" style={{ height:"5vh",width:"3vw" }} />  VLS LOGISTICS™</h2>
        <List component="nav" >
            <ListItem component="div" >
                <ListItemText inset>                    
                    <TypoGraphy color="inherit" variant="title">
                      <a href='#'>HOME</a>
                    </TypoGraphy>                    
                </ListItemText>
                <ListItemText inset>                    
                    <TypoGraphy color="inherit" variant="title">
                      <a href='#'>PRODUCTS</a>
                    </TypoGraphy>                    
                </ListItemText>
                <ListItemText inset>                    
                    <TypoGraphy color="inherit" variant="title">
                      <a href='#'>ABOUT</a>
                    </TypoGraphy>                    
                </ListItemText>
                <ListItemText inset>                    
                    <TypoGraphy color="inherit" variant="title">
                      <a href='#'>CONTACT</a>
                    </TypoGraphy>                    
                </ListItemText>
                
            </ListItem >
        </List> 
        </Toolbar>
         </AppBar>
    </div>
  );
}
export default Header;