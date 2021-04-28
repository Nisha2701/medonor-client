import * as ActionTypes from "../ActionTypes";

export const Medicines = (
	state = { isLoading: true, errMess: null, medicines: [] },
	action
) => {
	switch (action.type) {
		case ActionTypes.ADD_MEDICINES:
			return {
				...state,
				isLoading: false,
				errMess: null,
				medicines: action.payload,
			};

		case ActionTypes.MEDICINES_FAILED:
			return { ...state, isLoading: false, errMess: action.payload };

		case ActionTypes.MEDICINES_LOADING:
			return { ...state, isLoading: true, errMess: null, medicines: [] };

		case ActionTypes.ADD_MEDICINE:
				var medicine = action.payload;
				return { ...state, medicines: state.medicines.concat(medicine)};	
		
		case ActionTypes.DELETE_MEDICINE: 
				var medicineId = action.payload;
				var index = state.medicines.indexOf(state.medicines.filter(medicine => medicine._id === medicineId)[0]);
				state.medicines.splice(index, 1);
				return {...state, medicines: state.medicines}
	
		default:
			return state;
	}
};