# UseState Basic: 
- Definition:=> Before React 16.8, state could only be managed in class  components using the this.state mechanism but After 16.8 we using useState hook to manage state within a functional component.
 * So useState hooks allows us to declare state variables in a functional component
 
 ```javascript
 //syntax
 const [state, setState] = useState(initialState);
 ```
The useState hook returns an array with exactly two values:
 1. The current state. During the first render, it will match the initialState you have passed.
 2. The set function that lets you update the state to a different value and trigger a re-render.
