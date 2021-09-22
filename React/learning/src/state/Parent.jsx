import React from 'react'
import Child1 from './Child1'

const Parent = () => {
    const [state,setState] = React.useState(1);
    return (
        <div>
            <button onClick={()=>setState(state+1)}>Click</button>
            <Child1/>
        </div>
    )
}

export default Parent
