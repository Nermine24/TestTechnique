import {useDispatch, useSelector} from "react-redux";

import React, {useState} from 'react'
import {getPrediction} from "../actions/predictions.actions";
import predictionReducer from "../reducers/prediction.reducer";
import PredictionTable from "../components/prediction.table";
export const AddPredictionContainer = () => {

    const [prediction, setPrediction] = useState("");
    const uDispatch = useDispatch();
    const handleSubmit = (evt) => {
        evt.preventDefault();
        uDispatch(getPrediction(prediction));
    }
    const predictionState = useSelector(state => state.predictionReducer)
    const predictionTabState = useSelector(state => state.predictionsReducer)

    const displayPredictionResult = predictionState.idLoading ? (
        <p>loading ..;</p>
    ): predictionState.error ? (
        <p>{predictionState.error.toString()}</p>
    ) : predictionState.prediction && (predictionState.prediction <0.5) ?(
       <p> prediction accepté </p>
    ) : predictionState.prediction && (predictionState.prediction > 0.5) ?(
        <p>prediction n'est accepté</p>
    ) : (
        <p> {predictionState.prediction}</p>
    )
    const displayPredictionsTab = predictionTabState.predictions.length > 0 ? (
        <PredictionTable predictions={predictionTabState.predictions}/>
    ) : (
        <p>pas de predictions précédentes</p>
    )

    return (
        <div>
        <form onSubmit={handleSubmit}>
            <label>
                Description:
                <input
                    type="text"
                    value={prediction}
                    required
                    onChange={e => setPrediction(e.target.value)}
                />
            </label>
            <input type="submit" value="Envoyer" />
        </form>
            {displayPredictionResult}

            {displayPredictionsTab}
        </div>

    );
}