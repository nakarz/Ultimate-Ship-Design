import { useNavigate } from 'react-router-dom';
import styles from './typography.module.css';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';
// import jost from './assets/jost.png'
// import openSans from './assets/openSans.png'

export default function Typography() {
  const typographyRef = useRef(null);
  // const colorPaletteRef = useRef(null);
  // const assetRef = useRef(null);
  // const componentRef = useRef(null);
  // const match = useMatch('/typography');
  // const navigate = useNavigate();

  // useEffect(() => {
  //   if (!match) {
  //       navigate("/typography");
  //   }
  // },[match, navigate]
  // );
  return (
    <div className={styles.container}>
    <div className={styles.title}>
      <h3><FontAwesomeIcon icon={faFont} style={{ color: '#62929a' }} /></h3>
      <h3>Typography</h3>
    </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <h2 className={styles.subtitle1}>Jost</h2>
          <p className={styles.details}> used for displaying header and sub-header</p>
          <a className={styles.link} href="https://fonts.google.com/specimen/Jost">Download Jost font here!</a>
          {/* <img className={styles.fitpicture}
              src={jost}
              alt="Jost Implementation"></img> */}
        </div>
        <div
          className={styles.card2}
        >
          <h2 className={styles.subtitle2}>Open Sans</h2>
          <p className={styles.details}> used for displaying table details</p>
          <a className={styles.link} href="https://fonts.google.com/specimen/Open+Sans">Download Open Sans font here!</a>
          {/* <img className={styles.fitpicture}
              src={openSans}
              alt="OpenSans Implementation"></img> */}
        </div>
      </div>
      <footer className={styles.footer}>
        <small>
          Copyright &copy; PPL B 2023 - Najwa Kariza Anjelia
        </small>
      </footer>
    </div>
  );
}
