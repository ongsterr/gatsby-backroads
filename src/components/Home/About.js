import React from 'react'

import Title from '../Title'
import img from '../../images/defaultBcg.jpeg'

import styles from '../../css/about.module.css'

const About = () => {
  return (
    <div className={styles.about}>
      <Title title="about" subtitle="us" />
      <div className={styles.aboutCenter}>
        <article className={styles.aboutImg}>
          <div className={styles.imgContainer}>
            <img src={img} alt="about company" />
          </div>
        </article>
        <article className={styles.aboutInfo}>
          <h4>explore the difference</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi
            repellat dolore nobis. Nihil laborum officiis aliquam quam
            exercitationem quas necessitatibus!
          </p>
          <button type="button" className="btn-primary">
            read more
          </button>
        </article>
      </div>
    </div>
  )
}

export default About
