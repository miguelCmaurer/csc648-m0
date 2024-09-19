import React from 'react';
import { Outlet } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
export const About = () => {
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: 0,
      padding: 0,
      backgroundColor: '#f0f0f0',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      height: '100vh',
    },
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      gap: '20px',
      width: '100%',
      maxWidth: '100%',
      overflowX: 'auto',
    },
    box: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '250px',
    },
    boxImg: {
      width: '100%',
      borderRadius: '50%',
      border: '5px solid #3498db',
    },
    boxP: {
      marginTop: '10px',
      fontSize: '14px',
      color: '#333',
    },
    box1: {
      backgroundColor: '#ffe4b5',
      border: '2px solid black',
      padding: '15px',
      borderRadius: '10px',
      display: 'grid',
      gridTemplateColumns: '1fr',
      gridGap: '10px',
      width: '300px',
    },
    box1Img: {
      borderRadius: '50%',
      border: '5px solid #ff6347',
    },
    navbar: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      border: '3px solid #53a8b6',
      borderRadius: '5px',
      backgroundColor: '#79c2d0',
    },
    navbarComponent: {
      display: 'flex',
      flexDirection: 'row',
      flex: 1,
    },
    navbarLink: {
      display: 'flex',
      fontSize: '18px',
      border: '2px #5585b5 solid',
      borderRadius: '5px',
      justifyContent: 'space-between',
      alignItems: 'center',
      padding: '0.5vh 1vw',
      margin: '0.5vh 0.3vw',
      backgroundColor: '#bbe4e9',
      textDecoration: 'none',
      color: 'black',
    },
  };

  return (
    <div >
      <nav>
        <div style={styles.navbar}>
          <div style={styles.navbarComponent}>
            <NavLink to="/" style={styles.navbarLink}>Home</NavLink>
            <NavLink to="/" style={styles.navbarLink}>About</NavLink>
            <NavLink to="/" style={styles.navbarLink}>Data Entry</NavLink>
          </div>
          <div style={styles.navbarComponent}>
            <div style={styles.navbarLink}>PlaceHolder TEAM</div>
          </div>
          <div style={styles.navbarComponent}>
            <a href="signup.html" style={styles.navbarLink}>Sign Up</a>
            <a href="cart.html" style={styles.navbarLink}>Log in</a>
          </div>
        </div>
      </nav>

      <div style={styles.container}>
            <Outlet />
      </div>
    </div>
  );
};

