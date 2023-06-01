import React, { useEffect, useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import styles from './landingpage.module.css';
import Typography from './Typography';
// import ColorPalette from './ColorPalette';
// import Component from './Component';
// import Asset from './Asset';

export default function LandingPage() {
  const [name, setName] = useState('');
  // const myRef = useRef(null);
  const location = useLocation();
  // const navigate = useNavigate();

  // const typographyRef = useRef(null);
  // const colorPaletteRef = useRef(null);
  // const assetRef = useRef(null);
  // const componentRef = useRef(null);

  useEffect(() => {
    const urlTitle = {
      '/typography': 'Typography',
      '/asset': 'Asset',
      '/color-palette': 'ColorPalette',
      '/component': 'Component',
    };
    setName(urlTitle[location.pathname]);
  }, [location.pathname]);

  //   setName(urlTitle[location.pathname]);
  // }, [location.pathname]);

  // const handleTypographyClick = () => {
  //   if (typographyRef.current) {
  //     typographyRef.current.scrollIntoView({ behavior: 'smooth' });
  //   }
  // };

  // const handleColorPaletteClick = () => {
  //   if (colorPaletteRef.current) {
  //     colorPaletteRef.current.scrollIntoView({ behavior:'smooth' });
  //   }
  // };

  // const handleAssetClick = () => {
  //   if (assetRef.current) {
  //   assetRef.current.scrollIntoView({ behavior:'smooth' });
  //   }
  // };

  // const handleComponentClick = () => {
  //     if (componentRef.current) {
  //       componentRef.current.scrollIntoView({ behavior:'smooth' });
  //     }
  // };

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Ultimate Ship Design</h1>
      <div className={styles.cardWrapper}>
        <Link
          to="/typography"
          className={styles.cardTypography}
          onClick={() => setName('Typography')}
        >
          <FontAwesomeIcon icon={faFont} style={{ color: '#62929a' }} className={styles.icon} />
          <p className={styles.subtitle}>Typography</p>
        </Link>
        <Link
          to="/color-palette"
          className={styles.cardColorPalette}
          onClick={() => setName('Color Palette')}
          // onClick={handleColorPaletteClick}
        >
          <FontAwesomeIcon icon={faDroplet} style={{ color: '#62929a' }} className={styles.icon} />
          <p className={styles.subtitle}>Color Palette</p>
        </Link>
        <Link
          to="/asset"
          className={styles.cardAsset}
          onClick={() => setName('Asset')}
          // onClick={handleAssetClick}
        >
          <FontAwesomeIcon icon={faImage} style={{ color: '#62929a' }} className={styles.icon} />
          <p className={styles.subtitle}>Asset</p>
        </Link>
        <Link
          to="/component"
          className={styles.cardComponent}
          onClick={() => setName('Component')}
          // onClick={handleComponentClick}
        >
          <FontAwesomeIcon icon={faToggleOn} style={{ color: '#62929a' }} className={styles.icon} />
          <p className={styles.subtitle}>Component</p>
        </Link>
      </div>
      <center>
        <a className={styles.link} href="https://www.canva.com/design/DAFkMkanzBM/YlLtUfs5jgrHOjAf1lAgkw/edit?utm_content=DAFkMkanzBM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">See More!</a>
      </center>
      <footer className={styles.footer}>
        <small>
          Copyright &copy; PPL B 2023 - Najwa Kariza Anjelia
        </small>
      </footer>
    </div>
  );
}