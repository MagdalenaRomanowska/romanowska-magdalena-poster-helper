import React from 'react';
import styles from './BackgroundWall.module.scss';

export default function BackgroundWall() {
  
  return (
    <div className={styles.root}>      
      <img 
        className={styles.img}
        id={'scream'} 
        width={window.innerWidth / 2} 
        height={Math.floor(window.innerHeight * 0.68)} 
        alt={'background wall'}
        src={'https://www.bergerpaints.com/blog/wp-content/uploads/2019/05/maintaining_interior_paint.png'}>
        
      </img>
    </div>
  );
}

