import { combineReducers } from 'redux';

import { authentication } from './authentication.reducer';
import { registration } from './registration.reducer';
import { users } from './users.reducer';
import { alert } from './alert.reducer';
import { upload } from './upload.reducer';

const rootReducer = combineReducers({
    authentication,
    registration,
    upload ,
    users,
    alert
});

export default rootReducer;