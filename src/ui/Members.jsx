import React from 'react';
import { NavLink } from 'react-router-dom';

export const MemberList = () => {
  const styles = {
    memberList: {
      display: 'flex',
      flexDirection: 'row',
      flexWrap: 'wrap',
      justifyContent: 'space-between',
    },
    memberTitle: {
      marginLeft: '5px',
      marginTop: '20px',
      marginBottom: '20px',
      fontSize: '40px',
      fontFamily: 'Arial, sans-serif',
    },
    memberAnchor: {
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      width: '400px',
      height: '300px',
      backgroundColor: 'rgb(223, 239, 253)',
      borderRadius: '10px',
      marginBottom: '30px',
      textDecoration: 'none',
    },
    memberThumbnail: {
      marginTop: '20px',
      borderRadius: '10px',
      width: '350px',
      height: '200px',
    },
    memberImage: {
      borderRadius: '10px',
      width: '350px',
      height: '200px',
      objectFit: 'cover',
    },
    memberName: {
      marginTop: '15px',
      color: 'rgb(36, 36, 51)',
      fontFamily: 'Arial, Helvetica, sans-serif',
      fontSize: '20px',
    },
  };

  const members = [
    { name: 'Ali Almusawi', image: 'bird-building-nest-stockcake.png',to:'ali' },
    { name: 'Koby Kern', image: 'Koby_Kern.jpg',to:'koby' },
    { name: 'Ethan Zheng', image: 'imgA.jpg',to:'ethan' },
    { name: 'Jacob Vazquez', image: 'Batman.jpeg',to:'jacob' },
    { name: 'Miguel Maurer', image: 'cool-pic.jpg',to:'miguel' },
    { name: 'Nathan Gabriel David', image: 'nathanpicture.png',to:'nathan' },
    { name: 'Zeke Melo', image: '78.png',to:'zeke' },
  ];

  return (
    <div>
      <div style={styles.memberTitle}>MEMBERS:</div>
      <div style={styles.memberList}>
        {members.map((member, index) => (
          <NavLink key={index} style={styles.memberAnchor} to={member.to}>
            <div style={styles.memberThumbnail}>
              <img src={member.image} alt={member.name} style={styles.memberImage} />
            </div>
            <div style={styles.memberName}>{member.name}</div>
          </NavLink>
        ))}
      </div>
    </div>
  );
};