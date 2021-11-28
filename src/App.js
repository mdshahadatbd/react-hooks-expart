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
// import UsersProfile from './hooks/useEffect/UsersProfile';
import UsersProfile2 from './hooks/useEffect/UsersProfile2';
import Memo from './hooks/useMemo/Memo';
import Memo2 from './hooks/useMemo/Memo2';
import Ref from './hooks/useRef/Ref';
import Ref2 from './hooks/useRef/Ref2';
import Ref3 from './hooks/useRef/Ref3';
import Ref4 from './hooks/useRef/Ref4';
import Ref5 from './hooks/useRef/Ref5';
import Ref6 from './hooks/useRef/Ref6';
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

      <h3>UseEffect</h3>
      {/* <UsersProfile/> */}
      <UsersProfile2/>

      <h3>UseMemo</h3>
      <Memo/>
      <Memo2/>

      <h3>UseRef</h3>
      <Ref/>
      <Ref2/>
      <br/>
      <Ref3/>
      <Ref4/>
      <Ref5/>
      <h4>Ref6</h4>
      <Ref6/>
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
