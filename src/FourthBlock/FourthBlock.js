import React from 'react';
import styles from "./FourthBlock.module.css";
import styleContainer from "../Common/Styles/Container.module.css";

const FourthBlock = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                    <h3>Рассматриваю варианты удаленной работы</h3>
                    <div className={styles.hire}>Нанять меня</div>
            </div>
        </div>
    );
};

export default FourthBlock;