import React from 'react';
import styleContainer from '../Common/Styles/Container.module.css'
import styles from './FifthBlock.module.css'


const FifthBlock = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                    <h3>Контакты</h3>
                    <div className={styles.form}>
                        <form action="">
                            <input type="text" className={styles.formInput}/><br/>
                            <input type="text" className={styles.formInput}/><br/>
                            <textarea name="" id="" cols="30" rows="10"
                                      className={`${styles.formInput} ${styles.formArea}`}></textarea>
                        </form>
                    </div>
                    <input type="submit" className={styles.formSubmit}/>
            </div>
        </div>
    );
};

export default FifthBlock;