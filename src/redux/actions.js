
export default {
    fetchWorldPopulation: () => {
        return (dispatch, getState) => {
            const data = fetch("https://msi.bbycastatic.ca/mobile-si/si/v4/pdp/overview/10381162?lang=en").then((request) => request.json()).then(data => {
                dispatch({
                    type: 'FETCH_WORLD_POPULATION_SUCCESS',
                    data
                });
            });
        }
    }
}