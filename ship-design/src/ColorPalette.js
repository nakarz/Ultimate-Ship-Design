import styles from './colorpalette.module.css';
import React, { useEffect, useState, useRef } from 'react';
import baseColors from './assets/baseColors.png';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';

export default function ColorPalette() {
  const colorPaletteRef = useRef(null);

  return (
    <div className={styles.container}>
        <div className={styles.title}>
        <h3> <FontAwesomeIcon icon={faDroplet} style={{ color: '#62929a' }}  /> </h3>
        <h3>Color Palette</h3>
    </div>
      {/* <h1 className={styles.title} ref={colorPaletteRef}>Color Palette</h1> */}
      <div className={styles.cardWrapper}>
        {/* <div className={styles.card1}>
          <h2 className={styles.subtitle1}>Jost</h2>
          <p className={styles.details}> used for displaying header and sub-header</p>
          <a className={styles.link} href="https://fonts.google.com/specimen/Jost">Download Jost font here!</a>
          <img className={styles.fitpicture}
              src={jost}
              alt="Jost Implementation"></img>
        </div> */}
        <div
          className={styles.card1}
        >
          <h2 className={styles.subtitle2}>Base Colors</h2>
          <img className={styles.fitPicture}
              src={baseColors}
              alt="UI Colors">
          </img>
          <a className={styles.link} href="https://drive.google.com/file/d/1xKa_0OpcwOa8PwUltfsK7H7CJpuYtgUU/view?usp=sharing">For more color details here!</a>
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
