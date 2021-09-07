import {predictionConstants} from "../contants/prediction.contants";

const initState = {
    isLoading: true,
    prediction:  null,
    error: '',
};
function predictionReducer(state = initState, action) {
    console.log(action.type)
    switch (action.type) {
        case predictionConstants.LOAD_PREDICTION:
            return {
                isLoading: true,
            };
        case predictionConstants.LOAD_PREDICTION_SUCCESS:
            return {
                isLoading: false,
                prediction: action.payload,
                error: '',
            };
        case predictionConstants.LOAD_PREDICTION_FAIL:
            return {
                isLoading: false,
                prediction: null,
                error: action.payload,
            };
        default:
            return state;
    }
}
export default predictionReducer;