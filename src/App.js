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

const useStyles = makeStyles(theme => ({
  root: {
    width: 500,
  },
  typography: {
    padding: theme.spacing(2),
  },
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

  console.log("secondOpen", secondOpen)
  console.log("open", open)
  console.log("placement", placement)

  const handleClick = newPlacement => event => {
    if(!open) {
      setAnchorEl(event.currentTarget);
      setOpen(true);
      setPlacement(newPlacement);
    } else {
      setSecondAnchorEl(event.currentTarget)
      setSecondOpen(true)
      setSecondPlacement(newPlacement)
    }    
  };

  return (
    <div className="App">

      <div style={{height: '100px', backgroundColor: 'red'}}>
      <Popper 
        open={open} 
        anchorEl={anchorEl} 
        placement={'bottom'} 
        transition>
        {({ TransitionProps }) => (
          <Fade {...TransitionProps} timeout={350}>
            <ClickAwayListener  onClickAway={() => setOpen(false)}>
            <Paper>
              {/* <Typography className={classes.typography}>The content of the Popper.</Typography> */}
              <Grid item container xs={6} alignItems="flex-end" direction="column">
             
                <Grid item>
                  <Button ref={secondAnchorEl} className="hello" onClick={handleClick('right')}>right</Button>
                </Grid>
            
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
        {/* <Typography className={classes.typography}>The content of the Popper.</Typography> */}
          <Grid item>
          <Button className="hello" onClick={() => handleClick('right')}>right</Button>
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
