const initialState = {
    stats: undefined
}

export default (previousState = initialState, action) => {

    switch (action.type) {
        case 'FETCH_PDP_SUCCESS':
            return Object.assign({}, previousState, {stats: action.data})

    }

    return previousState;
}