import React from 'react'

import styles from "./DevelopmentTeam.module.css"
import github from "../../assets/images/github.svg"

const DevTeam = (props) => (
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {props.image} alt="MemberAvatar"></img>
      </div>
      <h3>{props.name}</h3>
      <span>
        <img src={github} alt = 'github'></img>
        <a href={`https://github.com/${props.github}`} className = {styles.memberGithub}>{props.github}</a>
      </span>
    </div>
);

export default DevTeam;