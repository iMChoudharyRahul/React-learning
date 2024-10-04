# React + Vite (Project Title)

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


## What is React: 
 React is open source fronted javaScript library develop by facebook in released in 2013, Its components based Approach, by using React we can make reusable Ui comp and building user interface especially for single page applications.The main Idea the behind React is to make reuseable Ui comp to rendering only updated comp.

## How its Work: 
   React uses its virtual DOM to make new changes and it updates only the element, that needs changing.

## why we use React:
  - Component-based architecture:
  - Virtual DOM:
  - Performance
  - Strong Community
  - Easy to learn and use
  - SEO friendly
  - Platform Independence

#### Advantage and Disadvantage:
 
-------------------------------------------------------------------------------------
## Syllabus-->
 - Hoc-higher order components
 - lifting state up 
 - props-> child to parent and parent to child data passing
 - React Router Dom
 - ### hooks:
    - useMemo 
    - useNavigate
    - useLocation 
    - useParams 
    - useContext
    - useReducer
    - useState
    - useEffect
    - useRef(uncontrolled-comp)
 - lifecycle methods
 - props and State
 - virtual dom 
 -  React Basic 
 --------------------------------------------------------------------------------------

 ## UseState and UseRef
  `Syntax`
  - ```const [variable, setVariable] = useState (intialArgument);```

 - ```const refVariable = useRef(initialValue);```
 ```
 console.log(refVariable) /* object--> {current: "initialValue"} 
//refVariable.current.initialValue  

//use useState and useRef
javscript dom --> useRef --> input // click button focus 

<button onvlick={focusHandler}> 
const focusHandler = () =>{
  refVariable.current.focus();
}
<input ref={refVariable}> 
```
----------------------------------------------
### Props drilling and useContext:
- first step -> identify --> data  creteContex
- second step --> provider --> App ---> children 
- third step --> useContext --> child component
---------------------------------------------
**Small Application** --> 
- data --> under jo bhi child bar bar render  ---> not use in large application
- solution large Application --> 
  - Redux---> state , action, reducer
   child --> child updated value mil jati --> not rerender
--------------------------------------------------
## useReducer
- syntax:
``` const[state, dispatch]= useReducer(reducer, initialArgument);```
--------------------------------------------------
## state v/s props 
  **state**--> 1--> 2--> componets data handling class comp --> hook--> state--> setState-->  count + 1 --> 16.8  --> hook --> useState 
- state --> mutable --> read and write --> update
- state class me use krte hai

**props**--> pass the data from parent to child --> function comp --> one comp to another comp
- immutable--> read --> write(no)
- usko class and function both we can use 
--------------------------------------------------
- data pass --> parent to child 
- data pass --> child to parent ---> lifting state up 
    ``` <ChildComponentA sharedValue={sharedValue} onUpdate={handleUpdate} /> ```
    key == Value --->   key ka use  --> Value(not use )
    props.shardValue--> error
    props.onUpdate--> 
-------------------------------------------------
- useReducer---> State Management --> 
- useState -->  value dependent nhi prev value
- useReducer --> data dependent perv data  --> 
**Syntex:**
 ``` const [state, dispatch] = useReducer(reducerFun, intialArgument); ```
 -------------------------------------------------
 - **state**: intial Arg, 
 - **dispatch** --> type --> kis type ka opertion perform krna 
  - 1 - create a reducer function--> 
  - 2 provide initial state --> 
  - 3 use dispatch for updating the state
## reducer Function
 ``` function reducerFun(state, action){
  switch(action.type === "INCREMENT"){
    case "INCREMENT": return {...state, count: state.count + 1};
  }
}
```
--------------------------------------------------
## todo list 
requirement -->  input, add, delete, update--> 
CRUD--> create, read, update, delete
--> small small Comp--> Task divide chuncks code 

--------------------------------------------------




