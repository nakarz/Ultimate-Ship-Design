import styles from './asset.module.css';
import menus from './assets/menus.png';
import quays from './assets/quays.png';
import ships from './assets/ships.png';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';

export default function Asset() {
  // const typographyRef = useRef(null);
  // const colorPaletteRef = useRef(null);
  const assetRef = useRef(null);
  // const componentRef = useRef(null);

  return (
    <div className={styles.container}>
    <div  div className={styles.title}>
      <h3> <FontAwesomeIcon icon={faImage} style={{ color: '#62929a' }} className={styles.icon} /></h3>
      <h3>Asset</h3>
    </div>
      <div className={styles.cardWrapper}>
        <div 
          className={styles.card1}
          >
          <h2 className={styles.subtitle}>Menu</h2>
          <a className={styles.link} href="https://drive.google.com/drive/folders/1B66RFOvZix6R7TYKy33w6qhLfMcQAO1Y?usp=sharing">Download Menu Assets here!</a>
          <img className={styles.fitPicture1}
              src={menus}
              alt="UI Menu">
          </img>
        </div>
        <div
          className={styles.card2}
        >
          <h2 className={styles.subtitle}>Quay</h2>
          <a className={styles.link} href="https://drive.google.com/drive/folders/18qi5hwK-NCY7j5EFSQlk1DFfXzyJlADP?usp=sharing">Download Quay Assets here!</a>
          <img className={styles.fitPicture2}
              src={quays}
              alt="UI Quay">
          </img>
        </div>
        <div
          className={styles.card3}
        >
          <h2 className={styles.subtitle}>Ship</h2>
          <a className={styles.link} href="https://drive.google.com/drive/folders/1b-nU6McByJIt8FV6BDVC6uz-jwk44C--?usp=sharing">Download Ship Assets here!</a>
          <img className={styles.fitPicture3}
              src={ships}
              alt="UI Ship">
          </img>
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
