import * as React from 'react';
//import { Nav, Navbar, NavItem } from 'react-bootstrap';
//import { IndexLinkContainer } from "react-router-bootstrap";
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, IconButton, Toolbar, Typography} from '@material-ui/core/';

export const Header: React.StatelessComponent<{}> = () => {
    return (
            <AppBar position="static" color="secondary">
                <Toolbar>
                    <IconButton  aria-label="Menu" color="inherit">
                        <MenuIcon aria-haspopup="true"/>
                    </IconButton>
                    <Typography variant="display2" color="inherit">
                        <Link style={{color: "white"}} to="/">currency converter </Link>
                        <Link to="/FirstComponent"> info </Link>
                    </Typography>
                </Toolbar>
            </AppBar>
    );
}