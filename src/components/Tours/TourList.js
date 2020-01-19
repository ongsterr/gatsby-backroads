import React, { useState, useEffect } from 'react'

import Tour from './Tour'
import Title from '../Title'

import styles from '../../css/items.module.css'

const TourList = ({ tours }) => {
  const [tourList, setTourList] = useState([])
  const [sortedTours, setSortedTours] = useState([])

  useEffect(() => {
    setTourList(tours.edges)
    setSortedTours(tours.edges)
    // return () => {
    //   cleanup
    // };
  }, [tours.edges])

  return (
    <section className={styles.tours}>
      <Title title="our" subtitle="tours" />
      <div className={styles.center}>
        {sortedTours.map(({ node }) => {
          return <Tour key={node.contentful_id} tour={node} />
        })}
      </div>
    </section>
  )
}

export default TourList
