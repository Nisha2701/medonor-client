//---------------------------------------NGO BENEFICIARY------------------------------------------------//

export const addNgoBeneficiary = (ngobeneficiary) => ({
	type: ActionTypes.ADD_NGOBENEFICIARY,
	payload: ngobeneficiary,
});

export const postNgoBeneficiary = (ngobeneficiary) => (dispatch) => {
	const newNgoBeneficiary = ngobeneficiary;

	return fetch(baseUrl + "ngobeneficiary", {
		method: "POST",
		body: JSON.stringify(newNgoBeneficiary),
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
		//credentials: "same-origin"
	})
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				throw error;
			}
		)
		.then((response) => response.json())
		.then((response) => dispatch(addNgoBeneficiary(response)))
		.catch((error) => {
			console.log("post ngoblog", error.message);
			alert("Your ngobeneficiary could not be posted\nError: " + error.message);
		});
};

export const fetchNgoBeneficiary = () => (dispatch) => {
	dispatch(blogbeneficiaryLoading(true));

	return fetch(baseUrl + "ngobeneficiary")
		.then(
			(response) => {
				if (response.ok) {
					return response;
				} else {
					var error = new Error(
						"Error " + response.status + ": " + response.statusText
					);
					error.response = response;
					throw error;
				}
			},
			(error) => {
				var errmess = new Error(error.message);
				throw errmess;
			}
		)
		.then((response) => response.json())
		.then((ngoblog) => dispatch(addNgoBeneficiary(ngoblog)))
		.catch((error) => dispatch(ngobeneficiaryFailed(error.message)));
};


export const deleteNgoBeneficiary = (ngobeneficiaryId) => (dispatch) => {

	return fetch(baseUrl + "ngobeneficiary/" + ngobeneficiaryId, {
		method: "DELETE",
		headers: {
			"Content-Type": "application/json",
			Authorization: bearer,
		},
        //credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(() => dispatch(removeNgoBeneficiary(ngobeneficiaryId)))
	.then(() => console.log('NgoBeneficiary deleted!!'))
    .catch(error => dispatch(ngobeneficiaryFailed(error.message)));
};

export const removeNgoBeneficiary = (ngobeneficiaryId) => ({
	type: ActionTypes.DELETE_NGOBENEFICIARY,
	payload: ngobeneficiaryId,
});

export const ngobeneficiaryLoading = () => ({
	type: ActionTypes.NGOBENEFICIARY_LOADING,
});

export const ngobeneficiaryFailed = (errmess) => ({
	type: ActionTypes.NGOBENEFICIARY_FAILED,
	payload: errmess,
});

export const addNgoBeneficiary = (ngobeneficiary) => ({
	type: ActionTypes.ADD_NGOBENEFICIARY,
	payload: ngobeneficiary,
});