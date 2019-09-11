export const initialState = {
    todos: [
        {
            item: 'Learn about reducers',
            completed: false,
            id: 3892987589
        }
    ]
}

export const todoReducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TODO':
            
            return {
                ...state, todos: [...state.todos, {item: action.payload, completed: false, id: Date.now()}]
            };
        case 'TOGGLE_DONE': 

            return {
                ...state, todos: state.todos.map(item=> {
                    if (item.id === action.payload) {
                    return {...item,
                        completed: !item.completed
                    }
                    }else {
                        return item;
                    }
                })
            };        
        case 'CLEAR_DONE':
            
            return{
                ...state, todos: state.todos.filter(todo =>{
                    return !todo.completed;
                })
            };

            default: 
            return state;
    }


}