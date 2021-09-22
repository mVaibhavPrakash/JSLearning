import React from 'react'
import ChildSibling1Child from './ChildSibling1Child'

const ChildSibling1 = () => {
    console.log('ChildSibling1')
    return (
        <div>
            <ChildSibling1Child />
        </div>
    )
}

export default ChildSibling1
