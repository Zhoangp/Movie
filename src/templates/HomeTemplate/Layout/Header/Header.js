import React, { Fragment, useEffect, useRef, useState } from "react";
import { styled, alpha } from "@mui/material/styles";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@mui/material/Box";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import SearchIcon from "@mui/icons-material/Search";
import Popover from "@mui/material/Popover";
import Button from "@mui/material/Button";
import { Link, NavLink } from "react-router-dom";
import { FaBars, FaTimes, FaSignInAlt } from "react-icons/fa";
import "./navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { actionTypes } from "../../../../redux/actions/types";
import { useHistory } from "react-router";
import {MdPersonPin} from 'react-icons/md'

const useStyle = makeStyles({
  out: {
    color: "white!important",
    fontSize: "15px!important",
    "&:focus": {
      outline: "none!important",
    },
    "&:hover": {
      color: "#faab00!important",
    },
  },
  buttonn: {
    color: "white!important",
    "&:focus": {
      outline: "none",
    },
  },
  abc: {
    textAlign: "unset",
    height: 8,
  },
  typo: {
    width: 200,
    background: "#222028",
    color: "white",
    "& a": {
      color: "white!important",
      textDecoration: "none",
      cursor: "pointer",
      "&:hover": {
        color: "#faab00 !important",
      },
    },
    "& ul": {
      height: 200,
      overflow: "scroll",
      padding: 0,
      margin: 0,
      "& li": {
        listStyle: "none",
        margin: "15px 0",
        fontWeight: "300",
        fontSize: "16px",
      },
    },
  },
  search: {
    transition: "all .5s",
  },
});

const Header = (props) => {
  const getCredentialFromLocal = () => {
    const credentialsStr = localStorage.getItem("credentials");
    if (credentialsStr) {
      dispatch({
        type: actionTypes.GET_USER,
        payload: JSON.parse(credentialsStr),
      });
    }
  };
  useEffect(() => {
    getCredentialFromLocal();
  }, []);
  const dispatch = useDispatch();

  const history = useHistory();
  const signOut = () => {
    dispatch({ type: actionTypes.SIGN_OUT });
    localStorage.removeItem("credentials");
    localStorage.removeItem("ACCESS_TOKEN");
    history.push("/");
  };
  const infor = useSelector((state) => state.UserReducer.infor);

  const [click, setClick] = useState(false);
  const ClickIcon = () => {
    setClick(!click);
  };
  const [button, setButton] = useState(true);

  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [user, setHideInfor] = React.useState(null);

  const handleClickPoper = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClickPoper2 = (event) => {
    setHideInfor(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  const handleClose2 = () => {
    setHideInfor(null);
  };

  const open = Boolean(anchorEl);
  const open2 = Boolean(user);
  const id = open ? "simple-popover" : undefined;
  const id2 = open ? "simple-popover2" : undefined;

  const classes = useStyle();
  const [classSearch, setClassSearch] = useState('')
  const ref = useRef()
  useEffect(() => {
    const checkIfClickedOutside = e => {
     
      if (classSearch && ref.current && !ref.current.contains(e.target)) {
        setClassSearch('')
      }
    }

    document.addEventListener("mousedown", checkIfClickedOutside)

    return () => {
      document.removeEventListener("mousedown", checkIfClickedOutside)
    }
  }, [classSearch])

  return (
    <Box ref={ref} sx={{ flexGrow: 1 }}>
      <nav className="navbar">
        <div className="navbar-container container">
          <NavLink to="/">
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="open drawer"
              sx={{}}
              className={classes.out}
            >
              <svg
                width="126"
                height="23"
                viewBox="0 0 126 23"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="logo"
              >
                <path
                  d="M18.2441 22H13.7178V12.7568H5.23633V22H0.695312V0.583984H5.23633V8.97754H13.7178V0.583984H18.2441V22ZM43.1025 11.2627C43.1025 14.8076 42.2236 17.5322 40.4658 19.4365C38.708 21.3408 36.1885 22.293 32.9072 22.293C29.626 22.293 27.1064 21.3408 25.3486 19.4365C23.5908 17.5322 22.7119 14.7979 22.7119 11.2334C22.7119 7.66895 23.5908 4.94922 25.3486 3.07422C27.1162 1.18945 29.6455 0.24707 32.9365 0.24707C36.2275 0.24707 38.7422 1.19434 40.4805 3.08887C42.2285 4.9834 43.1025 7.70801 43.1025 11.2627ZM27.4727 11.2627C27.4727 13.6553 27.9268 15.457 28.835 16.668C29.7432 17.8789 31.1006 18.4844 32.9072 18.4844C36.5303 18.4844 38.3418 16.0771 38.3418 11.2627C38.3418 6.43848 36.54 4.02637 32.9365 4.02637C31.1299 4.02637 29.7676 4.63672 28.8496 5.85742C27.9316 7.06836 27.4727 8.87012 27.4727 11.2627ZM55.8027 22H51.2617V4.36328H45.4463V0.583984H61.6182V4.36328H55.8027V22Z"
                  fill="#F9AB00"
                />
                <path
                  d="M69.3818 22H64.9141V0.583984H77.1895V4.30469H69.3818V9.82715H76.6475V13.5332H69.3818V22ZM81.3789 22V0.583984H85.9199V18.25H94.6064V22H81.3789ZM98.3418 22V0.583984H102.883V22H98.3418ZM125.588 22H120.402L115.422 13.8994L110.441 22H105.578L112.683 10.9551L106.032 0.583984H111.042L115.656 8.28906L120.183 0.583984H125.075L118.352 11.2041L125.588 22Z"
                  fill="white"
                />
              </svg>
            </IconButton>
          </NavLink>

          <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li className="nav-item">
              <NavLink to="/" className="nav-links" onClick={closeMobileMenu}>
                HOME
              </NavLink>
            </li>
            <li className="nav-item">
              <Link
                to="/services"
                className="nav-links"
                onClick={closeMobileMenu}
              >
                ADMIN PAGE
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/products" className="nav-links">
                ABOUT
              </Link>
            </li>
            <li className="nav-item">
              <Typography
                variant="h6"
                noWrap
                component="div"
                sx={{ flexGrow: 1 }}
                className="nav-links"
              >
                <Button className={classes.out} onClick={handleClickPoper}>
                  <i className={`fas fa-ellipsis-h ${classes.abc}`}></i>
                </Button>
                <Popover
                  id={id}
                  open={open}
                  anchorEl={anchorEl}
                  onClose={handleClose}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  style={{ top: 22, left: 18 }}
                >
                  <Typography sx={{ p: 2 }} className={classes.typo}>
                    <ul>
                      <li style={{ margin: 0 }}>
                        <a href="contacts.html">Contacts</a>
                      </li>
                      <li>
                        <a href="faq.html">Help center</a>
                      </li>
                      <li>
                        <a href="privacy.html">Privacy policy</a>
                      </li>
                      <li>
                        <a href="profile.html">Profile</a>
                      </li>
                      <li>
                        <a href="signin.html">Sign in</a>
                      </li>
                      <li>
                        <a href="signup.html">Sign up</a>
                      </li>
                      <li>
                        <a href="forgot.html">Forgot password</a>
                      </li>
                    </ul>
                  </Typography>
                </Popover>
              </Typography>
            </li>
            <li style={{ marginleft: "150px" }}></li>
          </ul>
          <div className="header__right">
            <form className={`header__search ${classSearch}`}>
              <input type="text" placeholder="Search..."></input>
              <button className="button__search">
                <SearchIcon />
              </button>
            </form>

            <div className="cover-sign">
              <button onClick={() => {
                setClassSearch('header__search__active')
              }} className="btn__search">
                <SearchIcon />
              </button>
              {infor ? (
                <Fragment>
                  <Button className={classes.out} onClick={handleClickPoper2}>
                  <MdPersonPin style={{width: "40px", height: "40px", margin: "0 10px"}}/>
                </Button>
                <Popover
                className="popop__cover"
                  id={id2}
                  open={open2}
                  anchorEl={user}
                  onClose={handleClose2}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  style={{ top: 22, left: 18}}
                >
                  <div className="popop__user">
                    <ul>
                      <li>
                      <NavLink to="/personal">
                        {infor.hoTen}
                       </NavLink>
                      </li>
                      <li>
                      <NavLink to="#" onClick={signOut}>
                        SIGN OUT
                      </NavLink>
                      </li>
                    </ul>
                 
                  
                  </div>
                </Popover>
                  
                </Fragment>
              ) : (
                <Fragment>
                  <NavLink className="signIn" to="/signin">
                    SIGN IN
                  </NavLink>
                  <NavLink to="/signup" extra className="btn-signIn">
                    <Button
                      onClick={closeMobileMenu}
                      className={classes.buttonn}
                    >
                      Sign up
                    </Button>
                    <FaSignInAlt className="btn-signIn-icon" />
                  </NavLink>
                </Fragment>
              )}
              <div className="menu-icon" onClick={handleClick}>
            {click ? <FaTimes /> : <FaBars />}
          </div>
            </div>
          </div>

         
        </div>
      </nav>
    </Box>
  );
};

export default Header;
