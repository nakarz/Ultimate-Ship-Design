// import styles from './landingpage.module.css';
// import React, { useState } from 'react';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faFont, faImage, faDroplet, faToggleOn } from '@fortawesome/free-solid-svg-icons';
// import { Link, useNavigate } from 'react-router-dom';
// import Typography from './Typography';
// import ColorPalette from './ColorPalette';
// import Component from './Component';
// import Asset from './Asset';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// // import { Link } from 'react-router-dom';

// export default function LandingPage() {
//   // const navigate = useNavigate();

//   // const handleTypographyClick = () => {
//   //   navigate('/typography');
//   // };

//   // const handleColorPaletteClick = () => {
//   //   navigate('/color-palette');
//   // };
  
//   // const handleAssetClick = () => {
//   //   navigate('/asset');
//   // };

//   // const handleComponentClick = () => {
//   //   navigate('/component');
//   // };

//   return (
//     <div className={styles.container}>
//       <h1 className={styles.title}>Ultimate Ship Design</h1>
//       <div className={styles.cardWrapper}>
//         <Link
//           to="/typography"
//           className={styles.cardTypography}
//           onClick={() => setName('Typography')}
//         >
//           <FontAwesomeIcon icon={faFont} style={{ color: '#62929a' }} className={styles.icon} />
//           <p className={styles.subtitle}>Typography</p>
//         </Link>
//         <Link
//           to="/color-palette"
//           className={styles.cardColorPalette}
//           onClick={() => setName('Color Palette')}
//           // onClick={handleColorPaletteClick}
//         >
//           <FontAwesomeIcon icon={faDroplet} style={{ color: '#62929a' }} className={styles.icon} />
//           <p className={styles.subtitle}>Color Palette</p>
//         </Link>
//         <Link
//           to="/asset"
//           className={styles.cardAsset}
//           onClick={() => setName('Asset')}
//           // onClick={handleAssetClick}
//         >
//           <FontAwesomeIcon icon={faImage} style={{ color: '#62929a' }} className={styles.icon} />
//           <p className={styles.subtitle}>Asset</p>
//         </Link>
//         <Link
//           to="/component"
//           className={styles.cardComponent}
//           onClick={() => setName('Component')}
//           // onClick={handleComponentClick}
//         >
//           <FontAwesomeIcon icon={faToggleOn} style={{ color: '#62929a' }} className={styles.icon} />
//           <p className={styles.subtitle}>Component</p>
//         </Link>
//       </div>
//       <center>
//         <a className={styles.link} href="https://www.canva.com/design/DAFkMkanzBM/YlLtUfs5jgrHOjAf1lAgkw/edit?utm_content=DAFkMkanzBM&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton">See More!</a>
//       </center>
//       <footer className={styles.footer}>
//         <small>
//           Copyright &copy; PPL B 2023 - Najwa Kariza Anjelia
//         </small>
//       </footer>
//     </div>
//   );
// }
