import {createStore} from 'redux';

export default createStore(function(state, action) {
  if(state === undefined) {
    console.log("hello world");
    
  }
  else if(action.type === "HOME") {
    console.log("hello world2");
  }
});

