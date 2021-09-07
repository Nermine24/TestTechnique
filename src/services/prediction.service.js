











export function getApiPrediction(text) {
    const requestOptions = {
        method: 'GET',
        mode:'cors',
        headers: {
                    'Content-Type':'application/json',
            'Accept': 'application/json'
                    },
    };
    return fetch(`https://moderation.logora.fr/predict?text=${text}`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        console.log(!response.ok)
        if (!response.ok) {

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        }
        return data.prediction[0];
    });
}