import React from 'react'
import styles from '../../styles/Card.module.scss'
import Link from "next/link";

const Card = (props:any) => {

    return (<div key={props.char.id} className={styles.characterList__card}>
        <div className={styles.characterList__card_overlay}>
          <Link href={`/character/${props.char.id}`}>
            <div className={styles.btn}>View</div>
          </Link>
        </div>
        <div>
          <img src={props.char.image} className={styles.characterList__card_image} />
        </div>
        <div>{props.char.name}</div>
        <div>{props.char.status}</div>
        <div>{props.char.gender}</div>
      </div>)

}

export default Card