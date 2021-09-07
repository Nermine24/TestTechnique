import {combineReducers} from "redux";
import predictionReducer from "../reducers/prediction.reducer";
import predictionsReducer from "../reducers/predictions.reducer";



export const rootReducer = combineReducers({
                predictionReducer,
                predictionsReducer

}
)