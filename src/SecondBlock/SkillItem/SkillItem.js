import React from 'react';
import fon3 from './fon3.jpg';
import styles from './SkillItem.module.css'
const SkillItem = (props) => {
    return (
        <div className={styles.main}>
            <div className={styles.img_div}>
                <img src={fon3} alt="png" className={styles.img}/>
            </div>
            <h3  className={styles.text}>
                {props.title}
            </h3>
            <span className={styles.skillDescriptionBlock}>
                        {props.text}
            </span>
        </div>
    );
};

export default SkillItem;