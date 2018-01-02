
export default {
    fetchWorldPopulation: () => {
        return (dispatch, getState) => {
            const data = fetch("http://api.population.io:80/1.0/population/World/2018-01-01/").then((request) => request.json()).then(data => {
                dispatch({
                    type: 'FETCH_WORLD_POPULATION_SUCCESS',
                    data
                });
            });
        }
    }
}