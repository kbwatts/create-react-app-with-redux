const initialState = {
    stats: undefined
}

export default (previousState = initialState, action) => {

    switch (action.type) {
        case 'FETCH_WORLD_POPULATION_SUCCESS':
            return Object.assign({}, previousState, {stats: action.data})

    }

    return previousState;
}