import React, {useState,useEffect} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import Header from "./components/Headers";
import {Route,Routes} from "react-router-dom";
import NotesList from "./containers/noteList";
import AddNewNote from "./containers/addNotes";


function App() {
  return (
      <div className={"App"}>

      {/* Header */}
      <Header></Header>

      {/* Header */}
          {/* Page Content */}

          <Routes>
              <Route path={'/'} index element={<NotesList />}/>
              <Route path={'/add-new-note'} element={<AddNewNote />} />
          </Routes>

          {/* Page Content */}
    <h1 className="bg-primary text-center text-white">
      Hello
    </h1>
          </div>
  );
}

export default App;
