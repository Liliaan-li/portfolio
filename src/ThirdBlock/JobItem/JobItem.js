import React from 'react';
import styles from './JobItem.module.css'
import fon from './fon.jpg'

const JobItem = () => {
    return (
        <div className={styles.main}>
            <div className={styles.wrapper}>
                <div className={styles.img_div}>
                    <img className={styles.img} src={fon} alt=""/>
                </div>
                <div className={styles.button}>Смотреть</div>
            </div>
            <h3 className={styles.h3}>
                Название проекта
            </h3>
            <p className={styles.p}>
                Краткое описание
            </p>
        </div>
    );
};

export default JobItem;