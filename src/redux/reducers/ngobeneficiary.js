import * as ActionTypes from "../ActionTypes";

export const NgoBeneficiary = (
	state = { isLoading: true, errMess: null, ngobeneficiary: [] },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_NGOBENEFICIARY:
			return {
				...state,
				isLoading: false,
				errMess: null,
				ngobeneficiary: action.payload,
			};

		case ActionTypes.NGOBENEFICIARY_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		case ActionTypes.NGOBENEFICIARY_LOADING:
			return { ...state, isLoading: true, errMess: null, ngobeneficiary: [] };

		case ActionTypes.ADD_NGOBENEFICIARY:
				var blog = action.payload;
				return { ...state, ngobeneficiary: state.ngobeneficiary.concat(ngobeneficiary)};	
		
		case ActionTypes.DELETE_NGOBENEFICIARY: 
				var ngoblogId = action.payload;
				var index = state.ngobeneficiaries.indexOf(state.ngobeneficiary.filter(ngobeneficiary => ngobeneficiary._id === ngobeneficiaryId)[0]);
				state.ngoblogs.splice(index, 1);
				return {...state, ngobeneficiary: state.ngobeneficiary}
	
		default:
			return state;
	}
};