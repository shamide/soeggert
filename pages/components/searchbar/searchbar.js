import React from 'react';
import styles from './searchbar.module.css'

function Searchbar(){
    return(
        <>
            <input
                type='text'
                placeholder='Search for your favorite music...'
                className={styles.input}
            
            />
        </>
    )
}
export default Searchbar;