
export default {
    fetchPDP: () => {
        return (dispatch, getState) => {
            const data = fetch("https://msi.bbycastatic.ca/mobile-si/si/v4/pdp/overview/10381162?lang=fr").then((request) => request.json()).then(data => {
                dispatch({
                    type: 'FETCH_PDP_SUCCESS',
                    data
                });
            });
        }
    }
}