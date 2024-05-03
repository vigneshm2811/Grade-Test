const loggerMiddleware = store => next => action => {


  // Pass the action to the next middleware or the reducer
  const result = next(action);



  return result;
};

export default loggerMiddleware;
