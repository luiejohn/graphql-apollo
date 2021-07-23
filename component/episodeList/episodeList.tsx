import React from "react";
import styles from '../../styles/episodeList.module.scss'

const EpisodeList = (props: any) => {
    return (                        
    <div className={styles.episode_item}>
        <div className={styles.episode_item_name}>
            <div>{props.detail.episode}</div>
            <div>{props.detail.name}</div>
        </div>
        
        <div>{props.detail.air_date}</div>
    </div>)
}

export default EpisodeList