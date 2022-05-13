import React from 'react';
import styles from './ThirdBlock.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import JobItem from "./JobItem/JobItem";

const ThirdBlock = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                    <h2>Мои работы</h2>
                    <div className={styles.row}>
                    <JobItem/>
                    <JobItem/>
                    </div>

            </div>
        </div>
    );
};

export default ThirdBlock;