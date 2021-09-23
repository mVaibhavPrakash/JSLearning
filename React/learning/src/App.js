import One from './state/context/One';
import ParentChildState from './state/parentchild/ParentChildState';
import ParentSiblingState from './state/parentsibling/ParentSiblingState';
import Sibling from './state/parentsibling/Sibling';

function App() {
  return (
    /* Button is used to change the state of the omponent*/
    <div className="App">
      <ParentChildState />
      {/* This shows that all child components(even nested) re-render whenever there is change in state of parent component*/}
      <ParentSiblingState />
      <Sibling />
      {/* This is will not re-render'Sibling' component even state of 'ParentSiblingState' changes as 'Sibling' is not the child of 'ParentSibligChild' component but the state of child and nesteed child changes */}
      <One />
    </div>
  );
}

export default App;
