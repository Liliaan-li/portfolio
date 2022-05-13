import React from 'react';
import styles from "./Footer.module.css";
import styleContainer from "../Common/Styles/Container.module.css";
import fon from './fon.jpg'

const Footer = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                <h3>Копылова Лилия</h3>
                <div className={styles.row}>
                    <img className={styles.img} src={fon} alt=""/>
                    <img className={styles.img} src={fon} alt=""/>
                    <img className={styles.img} src={fon} alt=""/>
                    <img className={styles.img} src={fon} alt=""/>
                </div>
                <div className={styles.p}>
                    <p>@2022 Все права защищены</p>
                </div>
            </div>
        </div>

    );
};

export default Footer;