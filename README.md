A Crud App scaled up with Reducer and Context

Components with many state updates spread across many event handlers can get overwhelming. For these cases, I used to consolidate all the state update logic outside  component into a single function, called a reducer. Used Context to pass information deep down to other components. Combined reducers and context together to manage the state.

What was done:
Firstly moved the setting state to dispatching actions
Secondly wrote a reducer function where put state logic.
Used this reducer from a component
