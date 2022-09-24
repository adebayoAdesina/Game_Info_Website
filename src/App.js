import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import {gamesAction} from './store/actions/gamesAction';

function App() {
  const dispatch = useDispatch()

  useEffect(()=> {
    dispatch(gamesAction());
  })
  return (
    <div className="App">
      <h2>Hello</h2>
    </div>
  );
}

export default App;
