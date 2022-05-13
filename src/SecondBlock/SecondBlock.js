import React from 'react';
import styles from './SecondBlock.module.css'
import styleContainer from '../Common/Styles/Container.module.css'
import SkillItem from "./SkillItem/SkillItem";

const SecondBlock = () => {
    return (
        <div className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                    <h2>Мои скиллы</h2>
                    <div className={styles.row}>
                    <SkillItem title={'React'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit'}/>
                    <SkillItem title={'HTML'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Architecto consequatur corporis culpa cupiditate eaque, ex exercitationem facere facilis '}/>
                    <SkillItem title={'CSS'} text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquid aut consectetur distinctio ducimus earum expedita'}/>
                    </div>
            </div>
        </div>
    );
};

export default SecondBlock;