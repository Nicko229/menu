import React, {useRef} from 'react';
import logo from './logo.svg';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Popper from '@material-ui/core/Popper';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import Fade from '@material-ui/core/Fade';
import Paper from '@material-ui/core/Paper';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import { KeyboardArrowRight } from "@material-ui/icons";

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
  menuButtons: {
    textTransform: 'none', 
    width: '100%',
  },
  firstMenuContainer: {
    maxWidth: '100%'
  }
}));

function App() {
  // const secondAnchorEl = useRef(null);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const [secondAnchorEl, setSecondAnchorEl] = React.useState(null)
  const [open, setOpen] = React.useState(false);
  const [secondOpen, setSecondOpen] = React.useState(false)
  const [placement, setPlacement] = React.useState('');
  const [secondPlacement, setSecondPlacement] = React.useState('')
  const classes = useStyles();

  const handleClick = newPlacement => event => {
    if(!open) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
      setPlacement(newPlacement);
    } else {
      setSecondAnchorEl(event.currentTarget);
      setSecondOpen(true);
      setSecondPlacement(newPlacement);
    }    
  };

  return (
    <div className="App">

      <div style={{height: '100px', backgroundColor: 'red'}}>
      <Popper 
        open={open} 
        anchorEl={anchorEl} 
        placement={placement} 
        transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <ClickAwayListener  onClickAway={() => setOpen(false)}>
            <Paper>
              <Grid item container xs={6} className={classes.firstMenuContainer} alignItems="flex-start" direction="column">
                {/* <Grid item> */}
                
                  <Button ref={secondAnchorEl} className={classes.menuButtons} onClick={handleClick('right-start')}>
                    User Management
                    <KeyboardArrowRight color="inherit" fontSize="small" className={classes.arrowDown} />
                  </Button>
                  <Button ref={secondAnchorEl} className={classes.menuButtons} onClick={console.log('right')}>Data Sources</Button>
                  <Button ref={secondAnchorEl} className={classes.menuButtons} onClick={console.log('right')}>Delivery Channels</Button>
                  <Button ref={secondAnchorEl} className={classes.menuButtons} onClick={console.log('right')}>License Management</Button>
                  <Button ref={secondAnchorEl} className={classes.menuButtons} onClick={console.log('right')}>Ping Settings</Button>
                  
                {/* </Grid> */}
              </Grid>
            </Paper>
            </ClickAwayListener>
          </Fade>
        )}
      </Popper>
      <Popper
      open={secondOpen} 
      anchorEl={secondAnchorEl} 
      placement={secondPlacement} >
        <ClickAwayListener  onClickAway={() => [setOpen(false), setSecondOpen(false)]}>
        <Paper>

          <Grid item alignItems="flex-start" direction="column" className={classes.firstMenuContainer}>
          <Button className="hello" className={classes.menuButtons} onClick={() => console.log("hello")}>Users</Button>
          <Button className="hello" className={classes.menuButtons} onClick={() => console.log('right')}>User Groups</Button>
          <Button className="hello" className={classes.menuButtons} onClick={() => console.log('right')}>User Privileges</Button>
          <Button className="hello" className={classes.menuButtons} onClick={() => console.log('right')}>LIcense Allocation</Button>
        
          </Grid>
        </Paper>
        </ClickAwayListener>
      </Popper>
      
        <Grid container justify="center">
        <Grid item>
          <Button onClick={handleClick('bottom')}>bottom</Button>
        </Grid>
      </Grid>
      </div>

      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
