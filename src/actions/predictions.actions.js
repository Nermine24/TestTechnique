import {predictionConstants} from "../contants/prediction.contants";
import {predictionsConstants} from "../contants/predictions.contants";
import {getApiPrediction} from "../services/prediction.service";


export const loadPrediction = () => {
    return {
        type: predictionConstants.LOAD_PREDICTION,
    };
};
export const loadPredictionSuccess = prediction => {
    return {
        type: predictionConstants.LOAD_PREDICTION_SUCCESS,
        payload: prediction,
    };
};
export const addPrediction = prediction => {
    return {
        type: predictionsConstants.ADD_PREDICTION,
        payload: prediction,
    };
};
export const loadPredictionFail = error => {
    return {
        type: predictionConstants.LOAD_PREDICTION_FAIL,
        payload: error,
    };
};


export const getPrediction = (prediction) => {

    return dispatch => {
        dispatch(loadPrediction());
        getApiPrediction(prediction)
            .then(resp => {
                dispatch(loadPredictionSuccess(resp));
                dispatch(addPrediction(resp))
            })
            .catch(error => {
               dispatch(loadPredictionFail(error));
            });
    };
};