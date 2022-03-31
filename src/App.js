
import React,{Component} from 'react'
import './App.css';



// ----------------------------------------------------------Video 5 of codevolution start----------------------------------------------
// method 1 fro importing
// import Greet from './components/Greet';


// method 2 for importing,(but this will not be used while calling class components)
// import {Greet} from './components/Greet';

// method 3 for importing
// the above line can also be written as:(changes made in line 13 too,any name can be choosen while importing the component)
// import Wishes from './components/Greet';
// -------------------------------------------------Video 5 of codevolution end-Fucntion basec component-------------------------------- 


// ----------------------------------------------------class based components start---------------------------------------------------
import Welcome from './components/Welcome';
// ----------------------------------------------------class based components end---------------------------------------------------

// ---------------------------------------------------React v/s JSX-----------------------------------------------------------
import ReactandJSX from './components/ReactandJSX';

// ----------------------------------------------------use of state and state hooks-----------------------------------------
import Message from './components/Message';

// ----------------------------------------------------use of setState---------------------------------------
import Counter from './components/Counter';

// ---------------------------------------------------Example of destructuring---------------------------------------------
import Greetings from './components/Greetings';

// ---------------------------------------------------Handling Events--------------------------------------------------
//function based component
import FunctionClick from './components/FunctionClick';
// class based component
import ClassClick from './components/ClassClick';
// passing method as props
import ParentComponent from './components/ParentComponent';
// conditional rendering
import UserGreeting from './components/UserGreeting';

class App extends Component{
  
  render(){
    return(
      <div className="App">

      <div className="starting">

          {/* // ----------------------------------------------------------Video 5 of codevolution start-function based components-------------------------- */}

          {/* for method 1 and 2 */}
          {/* <Greet/> */}

          {/* for method 3 */}
          {/* <Wishes/> */}
        {/* // ----------------------------------------------------------Video 5 of codevolution end-Function based components------------------------------- */}

        {/* // -------------------------------------------class based components start--------------------------------------------------- */}
        {/* <Welcome/> */}


        {/* // -------------------------------------------react code v/s jsx--------------------------------------------------- */}
        {/* <ReactandJSX/> */}


        {/* --------------------------------------------------Props------------------------------------------------------------ */}
          {/* <Greet name="Tony" heroName="Iron Man"> */}
            {/* passing values as atrributes */}
            {/* <p>This is a children of above component</p>
          </Greet>
          <Greet name="Peter" heroName="Spider-man">
          <button>Action</button>
          </Greet>
        <Greet name="Strange" heroName="Doctor Strange"/> */}

          {/* --------------------------------------using props in class component---------------------------------------------------*/}

          {/* <Welcome name="Hatim" heroName="HeroHeralaal" />
          <Welcome name="Newton" heroName="mathematcian" />
        <Welcome name="harshit" heroName="--"/> */}

         {/*----------------------------------------------Use of state and stateHooks---------------------------------------------  */}
          {/* <Message/> */}
        {/* -----------------------------------------use of setState------------------------------------------------- */}
          {/* <Counter/> */}
        {/* --------------------------------------example of destructuring--------------------------- */}
        {/* <Greetings name="Tony" heroName="Iron Man"/> */}
        {/* -----------------------------------------------Event Handling---------------------------------------------------- */}
        {/* <FunctionClick/> */}
        {/* event handling using claass based component */}
        {/* <ClassClick/> */}
        {/* paasing methods as props */}
        {/* <ParentComponent/> */}
        </div>
        {/* -----------------cocnditional rendering------------ */}
        <UserGreeting/>
        </div>
      )
    }
  }
  
  export default App;
  