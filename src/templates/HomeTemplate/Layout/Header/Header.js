import React from 'react';
import { styled, alpha } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';

const useStyle = makeStyles({
        div: {
          width: '40%',
          alignItems: 'flex-end'
        },
        menu: {
          fontSize: '15px !important',
          cursor: 'pointer',
          '&:hover': {
            color: '#faab00'
          }
        },    
        out: {
            color: 'white!important', fontSize: '15px!important' , 
        '&:focus': {
            outline: 'none!important'
        },
        '&:hover' : {
          color: '#faab00!important'
      },
     

      
    },
    buttonn: {
      color: 'white!important',
      border: '2px solid #faab00 !important',
      borderRadius: '7px !important',
      padding: '7px 25px !important',
      '&:hover': {
        backgroundColor: 'rgba(249,171,0,0.05)!important'
      }
    },
    abc: {
        textAlign: 'unset',
        height: 5,
    }, 
    typo: {
        width: 200,
        background: '#222028', color: 'white',
        '& a': {
            color: 'white!important',
           textDecoration: 'none',
           cursor:'pointer',
           '&:hover' : {
            color: '#faab00!important'
        }
        },
        '& ul': {
            height: 200,
            overflow: 'scroll',
            padding: 0,
            margin: 0,
            '& li': {
                listStyle: 'none',
                margin: '15px 0'

            }
        }
    },
    search: {
        transition: 'all .5s'
    }

})

const Search = styled('div')(({ theme }) => ({
    position: 'relative',
    backgroundColor: alpha(theme.palette.common.white, 0.15),
    marginLeft: 0,
    borderRadius: 5,

    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(1),
      width: '222px',
     
    },
  }));
  
  const SearchIconWrapper = styled('div')(({ theme }) => ({
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',

  
  }));
  
  const StyledInputBase = styled(InputBase)(({ theme }) => ({
    color: 'inherit',
    '& .MuiInputBase-input': {
      padding: theme.spacing(1, 1, 1, 0),
      // vertical padding + font size from searchIcon
      paddingLeft: `calc(1em + ${theme.spacing(4)})`,
      transition: theme.transitions.create('width'),
      width: '100%',
      [theme.breakpoints.up('sm')]: {
        '&:focus': {
          border: '2px solid #faab00',
          borderRadius: 5,
          transition: 'all .1s',
        },
      },
    },
  }));
  
const Header = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    const classes = useStyle();
    return (
        <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#1a191f',  }} >
        <Toolbar style={{justifyContent: 'space-evenly'}}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 20}}
            className={classes.out}
          >
              <svg width="126" height="23" viewBox="0 0 126 23" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M18.2441 22H13.7178V12.7568H5.23633V22H0.695312V0.583984H5.23633V8.97754H13.7178V0.583984H18.2441V22ZM43.1025 11.2627C43.1025 14.8076 42.2236 17.5322 40.4658 19.4365C38.708 21.3408 36.1885 22.293 32.9072 22.293C29.626 22.293 27.1064 21.3408 25.3486 19.4365C23.5908 17.5322 22.7119 14.7979 22.7119 11.2334C22.7119 7.66895 23.5908 4.94922 25.3486 3.07422C27.1162 1.18945 29.6455 0.24707 32.9365 0.24707C36.2275 0.24707 38.7422 1.19434 40.4805 3.08887C42.2285 4.9834 43.1025 7.70801 43.1025 11.2627ZM27.4727 11.2627C27.4727 13.6553 27.9268 15.457 28.835 16.668C29.7432 17.8789 31.1006 18.4844 32.9072 18.4844C36.5303 18.4844 38.3418 16.0771 38.3418 11.2627C38.3418 6.43848 36.54 4.02637 32.9365 4.02637C31.1299 4.02637 29.7676 4.63672 28.8496 5.85742C27.9316 7.06836 27.4727 8.87012 27.4727 11.2627ZM55.8027 22H51.2617V4.36328H45.4463V0.583984H61.6182V4.36328H55.8027V22Z" fill="#F9AB00"/>
<path d="M69.3818 22H64.9141V0.583984H77.1895V4.30469H69.3818V9.82715H76.6475V13.5332H69.3818V22ZM81.3789 22V0.583984H85.9199V18.25H94.6064V22H81.3789ZM98.3418 22V0.583984H102.883V22H98.3418ZM125.588 22H120.402L115.422 13.8994L110.441 22H105.578L112.683 10.9551L106.032 0.583984H111.042L115.656 8.28906L120.183 0.583984H125.075L118.352 11.2041L125.588 22Z" fill="white"/>
</svg>
          </IconButton>
         <Box className={classes.div} sx={{display: {lg: 'flex', md: 'none', sm: 'none',  xs: 'none'}}}>
          <Typography className={classes.menu} 
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, }}
          >HOME
          </Typography>
          <Typography className={classes.menu}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, }}
          >CATALOG
          </Typography>
          <Typography className={classes.menu}
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, }}
          >PRICING PLAN</Typography>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1,}}
          >
                  <Button className={classes.out}   onClick={handleClick}>
                  <i className={`fas fa-ellipsis-h ${classes.abc }`}></i>
                </Button>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        style={{top: 22, left: 18}}
      >
        <Typography sx={{ p: 2 }} className={classes.typo} >
        <ul>
        <li style={{margin: 0 }}><a href="contacts.html">Contacts</a></li>
        <li><a href="faq.html">Help center</a></li>
        <li><a href="privacy.html">Privacy policy</a></li>
        <li><a href="about.html">About</a></li>
        <li><a href="../admin/index.html" target="_blank">Admin pages</a></li>
        <li><a href="profile.html">Profile</a></li>
        <li><a href="signin.html">Sign in</a></li>
        <li><a href="signup.html">Sign up</a></li>
        <li><a href="forgot.html">Forgot password</a></li>
        </ul>
        </Typography>
      </Popover>
          </Typography>
        </Box>
          <Search className={classes.search}  sx={{display : {md: 'block', sm: 'none', xs: 'none ' }}}>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <Button className={classes.buttonn}   onClick={handleClick}>
                  Sign In
                </Button>
        </Toolbar>
      </AppBar>
    </Box>
    );
};

export default Header;