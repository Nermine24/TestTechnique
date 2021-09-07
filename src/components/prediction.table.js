import React from "react";

const PredictionTable = (props) => {
    return (
        <>
            <>


                <div className="col-lg-12 col-md-12 ml-auto mr-auto">
                    <div className="table-responsive">
                        <table className="table table-shopping">
                            <thead>
                            <tr>
                                <th>Prediction</th>
                                <th className="text-center">status</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                props.predictions && props.predictions.map((item,index) => {
                                    const status  = item > 0.5  ?(
                                        <td>
                                            <p style={{color: "red"}}> non validé  </p>
                                        </td>
                                    ) : (
                                        <td>
                                            <p style={{color: "green"}}> validé  </p>
                                        </td>
                                    )
                                    return <tr key={index}>
                                        <td>
                                            <p>{Number(item).toFixed(2)}  </p>
                                        </td>
                                        { status }

                                    </tr>
                                })
                            }

                            </tbody>
                        </table>
                    </div>
                </div>

            </>
        </>
    );
}
export default PredictionTable;