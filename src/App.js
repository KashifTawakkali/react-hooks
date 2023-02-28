// import logo from './logo.svg';
import './App.css';
import Test from './components/debug/Test';
import Parent from './components/call/Parent';
import AA from './components/content/AA';
import Effects from './components/effect/Effects';
import Kashif from './components/imperative/Kashif';
// import Lay from './components/layoout/Lay';
// import Memo from './components/memoo/Memo';
import Redusors from './components/reduce/Redusors';
import Refer from './components/ref/Refer';
// import Users from './components/effect/Users';
import Prectice from './components/state/Prectice';
// import State from './components/state/State';

function App() {
  return (
    <>
    {/* <State/> */}
    <Prectice />
    <Effects/>
    <AA />
    <Redusors/>
    {/* <Memo/> */}
    <Parent/>
    <Refer/>
    <Kashif/>
    {/* <Lay/> */}
    <Test/>
    </>
  );
}

export default App;
