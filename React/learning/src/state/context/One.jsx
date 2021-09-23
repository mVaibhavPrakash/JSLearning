import React from 'react'
import { Hook } from './Hook'
import Three from './Three'
import Two from './Two'

const One = () => {
    console.log('One')
    return (
        <div>
            <Hook>
                <Two />
                <Three/>
            </Hook>
        </div>
    )
}

export default One

