import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import FeatureMovie from '@/components/featured-move'
import Categories from '@/components/categories'
const HomeContainer = () => {
  return (
    <div>
        <FeatureMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0,5)}/>
    </div>
  )
}

export default HomeContainer