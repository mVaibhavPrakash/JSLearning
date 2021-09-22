import React from 'react'
import Child from './Child'
import ChildSibling1 from './ChildSibling1';

const ParentSiblingState = () => {
    const [state,setState] = React.useState(1);
    console.log('ParentSiblingState')
    return (
        <div>
            <button onClick={() => setState(state+1)}>Click!</button>
            <Child />
            <ChildSibling1 />
        </div>
    )
}

export default ParentSiblingState
