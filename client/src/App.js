import React, { useState } from 'react';
import {Route} from "react-router-dom"
import SavedList from './Movies/SavedList';
import Movie from "./Movies/Movie"

const App = () => {
  const [savedList, setSavedList] = useState( [] );

  const addToSavedList = movie => {
    setSavedList( [...savedList, movie] );
  };

  return (
    <div>
      <SavedList list={savedList} />
      <Route exact path="/" component={Movie} />
      <Route path="/movies/:id" component={Movie} />
    </div>
  );
};

export default App;
