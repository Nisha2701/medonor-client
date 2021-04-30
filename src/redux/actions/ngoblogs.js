//---------------------------------------NGOBLOG DEMANDS------------------------------------------------//

export const addNgoBlog = (ngoblog) => ({
	type: ActionTypes.ADD_NGOBLOG,
	payload: ngoblog,
});

export const postNgoBlog = (ngoblog) => (dispatch) => {
	const newNgoBlog = ngoblog;

	return fetch(baseUrl + "ngoblog", {
		method: "POST",
		body: JSON.stringify(newNgoBlog),
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
		.then((response) => dispatch(addNgoBlog(response)))
		.catch((error) => {
			console.log("post ngoblog", error.message);
			alert("Your ngoblog could not be posted\nError: " + error.message);
		});
};

export const fetchNgoBlogs = () => (dispatch) => {
	dispatch(ngoblogLoading(true));

	return fetch(baseUrl + "ngoblog")
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
		.then((ngoblog) => dispatch(addNgoBlog(ngoblog)))
		.catch((error) => dispatch(ngoblogFailed(error.message)));
};


export const deleteNgoBlog = (ngoblogId) => (dispatch) => {

	return fetch(baseUrl + "ngoblog/" + ngoblogId, {
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
    .then(() => dispatch(removeNgoBlog(ngoblogId)))
	.then(() => console.log('NgoBlog deleted!!'))
    .catch(error => dispatch(ngoblogFailed(error.message)));
};

export const removeNgoBlog = (ngoblogId) => ({
	type: ActionTypes.DELETE_NGOBLOG,
	payload: ngoblogId,
});

export const ngoblogLoading = () => ({
	type: ActionTypes.NGOBLOG_LOADING,
});

export const ngoblogFailed = (errmess) => ({
	type: ActionTypes.NGOBLOG_FAILED,
	payload: errmess,
});

export const addNgoBlog = (ngoblog) => ({
	type: ActionTypes.ADD_NGOBLOG,
	payload: ngoblog,
});
