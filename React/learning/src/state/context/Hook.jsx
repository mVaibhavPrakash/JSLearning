import {createContext,useState} from 'react'

export const CreateContext = createContext();

export const Hook = ({children}) =>{
    const [state,setState] = useState(1)
    return(
        <CreateContext.Provider value={[state,setState]}>
            {children}
        </CreateContext.Provider>
    )
}