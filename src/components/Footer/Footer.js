import React from 'react';
import styles from './Footer.module.scss';




function Footer(props) {

  return (
    <div className={styles.footer}>
      {props.text}
    </div>
  );
}

export default Footer;
