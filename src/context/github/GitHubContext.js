import { createContext,useReducer } from "react";
import gitHubReducer from "./GitHubReducer";

const GithubContext = createContext();

export const GithubProvider = ({children}) => {
    const initialState={
        user:null,
        users:[],
        loading:false
    }
    
    const [state,dispatch] = useReducer(gitHubReducer,initialState);

   
   return( <GithubContext.Provider value={{
    ...state,
    dispatch
    }}>
{children}
    </GithubContext.Provider>)
}

export default GithubContext;