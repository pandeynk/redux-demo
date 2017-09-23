export default function reducer(state = {
    users : [],
    fetched : false,
    fetching : false,
    error : null
}, action){
    switch(action.type){
        case 'FETCH_USER_FULFILLED':
            return {...state, fetching: false, fetched: true, users: action.payload};
        case 'FETCH_USER_REJECTED':
            return {...state, fetching: false, fetched: false, error : action.payload};
        default: return state;
    }
}
