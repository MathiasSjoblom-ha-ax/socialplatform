const Reducer = (state, action) => {
    switch(action.type) {
        case "LOGIN_START":
            return{
                user: null,
                isFetching: true,
                error: false,
            };
        case "LOGIN_DONE":
            return{
                user: action.package,
                isFetching: false,
                error: false,
            };
        case "LOGIN_FAIL":
            return{
                user: null,
                isFetching: false,
                error: true,
            };
        default:
            return state;
    }
}

export default Reducer;