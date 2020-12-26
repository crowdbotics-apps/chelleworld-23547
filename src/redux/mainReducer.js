import { combineReducers } from "redux";

/**
 * You can import more reducers here
 */


//@BlueprintReduxImportInsertion
import Dashboard12188008Reducer from '../features/Dashboard12188008/redux/reducers'
import Dashboard13188007Reducer from '../features/Dashboard13188007/redux/reducers'

export const combinedReducers = combineReducers({
  blank: (state, action) => {
    if (state == null) state = [];
    return state;
  },


  //@BlueprintReduxCombineInsertion
Dashboard12188008: Dashboard12188008Reducer,
Dashboard13188007: Dashboard13188007Reducer,

});