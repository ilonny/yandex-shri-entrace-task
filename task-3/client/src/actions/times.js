import constants from 'constants'
import axios from 'axios'
const apiUrl = "http://localhost:3001/api"
////// action creators start //////

export const testAction = () => {
    return {
        type: constants.TEST_ACTION
    }
}

////// action creators end //////


//make chains with simple actions
export function testAsyncAction() {
    return dispatch => {
        dispatch(testAction())
        axios.get(apiUrl + '/test')
            .then((response) => {
                console.log('response', response)
            })
            .catch((error) => {
                // error, dispatch error action
                console.log('error', error)

            })
    }
}