const loggerMiddleware = store => next => action => {
    console.log('Action:', action);
    console.log('State before dispatch:', store.getState());
    
    // Pass the action to the next middleware or the reducer
    const result = next(action);
    
    console.log('State after dispatch:', store.getState());
    
    return result;
  };
  
  export default loggerMiddleware;
  