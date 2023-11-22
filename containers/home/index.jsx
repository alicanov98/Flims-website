import React from 'react'
import Movies from '@/mocks/movies.json'
import Genres from '@/mocks/genres.json'

import FeatureMovie from '@/components/featured-move'
import Categories from '@/components/categories'
import { MoviesSection } from '@/components/movies-section'
const HomeContainer = () => {
  return (
    <div>
        <FeatureMovie movie={Movies.results[0]}/>
        <Categories categories={Genres.genres.slice(0,5)}/>
        <MoviesSection title="Popular Films" movies={Movies.results.slice(1,7)} />
        <MoviesSection title="Your Favorit" movies={Movies.results.slice(7,14)} />
    </div>
  )
}

export default HomeContainer