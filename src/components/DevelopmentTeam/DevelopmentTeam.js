import React from 'react'

import styles from "./DevelopmentTeam.module.css"
import github from "../../assets/images/github.svg"
import gerasikImage from "../../assets/images/gerasik.jpg"
import vldmrImage from "../../assets/images/vldmr1.jpg"
import maliaxandrImage from "../../assets/images/maliaxandr.jpg"
import velenaflowerImage from "../../assets/images/velenaflower.jpg"
import finnibyhImage from "../../assets/images/finnibyh.jpg"

const DevTeam = () => (
  <div className = {styles.team}>
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {gerasikImage} alt="MemberAvatar"></img>
      </div>
      <h3>Yauheni Herasimenka</h3>
      <span>
        <img src={github} alt = 'github'></img>
        <a href="https://github.com/gerasik" className = {styles.memberGithub}>gerasik</a>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {vldmrImage} alt="MemberAvatar"></img>
      </div>
      <h3>Vladimir Malygin</h3>
      <span>
        <img src={github} alt = 'github'></img>
        <a href="https://github.com/vldmr1" className = {styles.memberGithub}>vldmr1</a>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {maliaxandrImage} alt="MemberAvatar"></img>
      </div>
      <h3>Aliaksandr Mamchyts</h3>
      <span>
        <img src={github} alt = 'github'></img> 
        <a href="https://github.com/maliaxandr" className = {styles.memberGithub}>maliaxandr</a>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {velenaflowerImage} alt="MemberAvatar"></img>
      </div>
      <h3>Alena Yanchanka</h3>
      <span>
        <img src={github} alt = 'github'></img>
        <a href="https://github.com/velenaflower" className = {styles.memberGithub}>velenaflower</a>
      </span>
    </div>
    <div className = {styles.teamMember}>
      <div className = {styles.memberAvatar}>
        <img src = {finnibyhImage} alt="MemberAvatar"></img>
      </div>
      <h3>Daniil Gaiduk</h3>
      <span>
        <img src={github} alt = 'github'></img>
        <a href="https://github.com/finnibyh" className = {styles.memberGithub}>finnibyh</a>
      </span>
    </div>
  </div>
  
);

export default DevTeam;