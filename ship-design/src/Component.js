import styles from './component.module.css';
import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';

const handleSmartButtonClick = () => {
  console.log("Smart Button Click");
}

const handleQuayButtonClick = () => {
  console.log("Quay Button Click");
}

export default function Component() {
  // const typographyRef = useRef(null);
  // const colorPaletteRef = useRef(null);
  // const assetRef = useRef(null);
  const componentRef = useRef(null);

  return (
    <div className={styles.container}>
      <div  div className={styles.title}>
        <h3><FontAwesomeIcon icon={faToggleOn} style={{ color: '#62929a' }} /></h3>
        <h3>Component</h3>
      </div>
      <div className={styles.cardWrapper}>
        <div className={styles.card1}>
          <h2 className={styles.subtitle1}>Button #1</h2>
          <p className={styles.details}> Smart Button, Select Quay </p>
          <button
            className={styles.smartButton}
            onClick={() => handleSmartButtonClick()}
          >
            Smart Assign
          </button>
        </div>
        <div
          className={styles.card2}
        >
          <h2 className={styles.subtitle2}>Button #2</h2>
          <p className={styles.details}> Change Quay </p>
          <button
            className={styles.quayButton}
            onClick={() =>handleQuayButtonClick()}
          >
            Change Quay
          </button>
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
