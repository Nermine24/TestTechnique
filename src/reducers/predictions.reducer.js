import {predictionsConstants} from "../contants/predictions.contants";

const initState = {
    predictions:  [],
};
function predictionsReducer(state = initState, action) {

    switch (action.type) {
        case predictionsConstants.ADD_PREDICTION:
            const newPredictions = [...initState.predictions,action.payload]
            initState.predictions = newPredictions
            return {
                predictions: newPredictions,
            };
        default:
            return state;
    }
}
export default predictionsReducer;