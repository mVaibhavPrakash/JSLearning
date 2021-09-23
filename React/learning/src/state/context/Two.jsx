import {useContext} from 'react'
import {CreateContext} from './Hook'
import TwoChild from './TwoChild';

const Two = () => {
    console.log('Two')
    const [state,setState] = useContext(CreateContext);
    return (
        <div>
            <button onClick={()=>setState(state+1)}>Click Me!</button>
            <TwoChild/>
        </div>
    )
}

export default Two