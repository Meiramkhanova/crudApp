Components with many state updates spread across many event handlers can get overwhelming. For these cases, I used to consolidate all the state update logic outside  component into a single function, called a reducer.

Firstly moved the setting state to dispatching actions
Secondly wrote a reducer function where put state logic.
Used this reducer from a component
