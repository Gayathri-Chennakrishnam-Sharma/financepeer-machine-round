import { alertConstants } from '../_constants';

export function upload(state = {}, action) {
    switch (action.type) {
        case alertConstants.SUCCESS:
            return { uploading: true };
        case alertConstants.ERROR:
            return {};
        default:
            return state
    }
}