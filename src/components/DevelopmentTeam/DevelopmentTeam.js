import React from 'react'

import styles from "./DevelopmentTeam.module.css"

const DevTeam = () => (
  <div className = {styles.team}>
    <div className = {styles.teamMember}>
      <img src = "/" alt="MemberAvatar" className = {styles.memberAvatar}></img>
      <h3>Member Name</h3>
      <span>
        <img src="/" alt = 'github'></img>
        <p className = {styles.memberGithub}>Member Github</p>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <img src = "/" alt="MemberAvatar" className = {styles.memberAvatar}></img>
      <h3>Member Name</h3>
      <span>
        <img src="/" alt = 'github'></img>
        <p className = {styles.memberGithub}>Member Github</p>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <img src = "/" alt="MemberAvatar" className = {styles.memberAvatar}></img>
      <h3>Member Name</h3>
      <span>
        <img src="/" alt = 'github'></img>
        <p className = {styles.memberGithub}>Member Github</p>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <img src = "/" alt="MemberAvatar" className = {styles.memberAvatar}></img>
      <h3>Member Name</h3>
      <span>
        <img src="/" alt = 'github'></img>
        <p className = {styles.memberGithub}>Member Github</p>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <img src = "/" alt="MemberAvatar" className = {styles.memberAvatar}></img>
      <h3>Member Name</h3>
      <span>
        <img src="/" alt = 'github'></img>
        <p className = {styles.memberGithub}>Member Github</p>
      </span>
    </div>
  </div>
  
);

export default DevTeam;