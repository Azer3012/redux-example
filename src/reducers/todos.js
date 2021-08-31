

const initialState=[
    {id:0,name:"dfwesfw"}
]


const todosReducer=(state=initialState,action)=>{
    switch(action.type){
        case "ADD_TODO":
            return state=[...state,{name:action.payload}]
        default:
            return state
    }
}

export default todosReducer;