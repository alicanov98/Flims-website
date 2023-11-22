import FeatureMovie from '@/components/featured-move'
import React from 'react'

const MovieContainer = ({movie}) => {
  return (
    <FeatureMovie movie={movie} isCompact={false}/>
  )
}

export default MovieContainer