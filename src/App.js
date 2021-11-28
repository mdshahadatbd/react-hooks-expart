import React from 'react';
import './App.css';
import AppThemeUpdate from './hooks/context2/AppThemeUpdate';
import AppColor from './hooks/context3/AppColor';
// import Clock from './hooks/effect/Clock';
import Counter from './hooks/effect/Counter';
import Timer from './hooks/effect/Timer';
import TimerClear from './hooks/effect/TimerClear';
import Car from './hooks/state/Car';
import FavoriteColor from './hooks/state/FavoriteColor';
import Add from './hooks/useState/Add';
// import FirstComponent from './components/FirstComponent';
// import SecondComponent from './components/SecondComponent';
// import useCustomHook from './custom/useCustom';

function App() {
  return (
    <div className="App">
      Hello <br/>
      <h3>UseState</h3>
      <Add/>
      {/* <useCustomHook/> */}
      {/* <FirstComponent/> */}
      {/* <SecondComponent/> */}
      <FavoriteColor/>
      <Car/>
      {/* <Clock/> */}
      <Timer/>
      <TimerClear/>
      <Counter/>
      <AppColor/>
      <AppThemeUpdate/>

    </div>
  );
}

export default App;
