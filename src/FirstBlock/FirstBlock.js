import React from 'react';
import styleContainer from '../Common/Styles/Container.module.css'
import styles from './FirstBlock.module.css'
import photo from './photo.jpg'

const FirstBlock = () => {
    return (
        <div  className={styles.main}>
            <div className={`${styleContainer.container} ${styles.container}`}>
                    <div className={styles.greeting}>
                        <p>Привет!<br/>
                            Меня зовут Лилия Копылова<br/>
                            Я front-end разработчик<br/>
                        </p>
                    </div>
                    <div className={styles.photo}>
                        <img className={styles.img} src={photo} alt=""/>
                    </div>
            </div>
        </div>
    );
};

export default FirstBlock;