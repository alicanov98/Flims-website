import MovieContainer from "@/containers/movie";
import React from "react";
import Movies from "@/mocks/movies.json";
import { notFound } from "next/navigation";

async function delay(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

async function MovePage({ params, searchParams }) {
  await delay(2000);

  const moviesDetail = Movies.results.find(
    (movie) => movie.id.toString() === params.id
  );
  if (!moviesDetail) {
    notFound();
  }

  if (searchParams.error === "true") {
    throw new Error("Error Happened");
  }
  return <MovieContainer movie={moviesDetail} />;
}

export default MovePage;
