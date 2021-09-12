import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import './components/Header';
import Header from './components/Header';

export default function App(): JSX.Element {
  return (
    <div className="App">
      <Header />
    </div>
  );
}