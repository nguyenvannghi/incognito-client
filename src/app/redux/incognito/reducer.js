import { createReducer } from '@reduxjs/toolkit';
import * as nameActs from './actions';
import { FIELDS_STATE } from './consts';

export const initState = {
    [FIELDS_STATE.ACCOUNTS]: [],
    [FIELDS_STATE.ACCOUNT_SELECTED]: null,
    [FIELDS_STATE.INCOGNITO_ERROR]: null,
    [FIELDS_STATE.INCOGNITO_LOADING]: false,
};

const incognitoDataReducer = createReducer(initState, {
    [nameActs.onIncognitoGetAccounts]: (state) => {
        state[FIELDS_STATE.INCOGNITO_LOADING] = true;
    },
    [nameActs.onIncognitoGetAccountsSucceeded]: (state, action) => {
        const { payload: accounts } = action;
        state[FIELDS_STATE.ACCOUNTS] = accounts;
        state[FIELDS_STATE.INCOGNITO_LOADING] = false;
    },
    [nameActs.onIncognitoCreateAccountSucceeded]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.ACCOUNTS] = [...state[FIELDS_STATE.ACCOUNTS], payload.account];
        state[FIELDS_STATE.INCOGNITO_ERROR] = initState[FIELDS_STATE.INCOGNITO_ERROR];
        state[FIELDS_STATE.INCOGNITO_LOADING] = false;
    },
    [nameActs.onIncognitoRemoveAccountSucceeded]: (state, action) => {
        const { payload } = action;
        const accounts = state[FIELDS_STATE.ACCOUNTS].splice(payload.accountIndex, 1);
        state[FIELDS_STATE.ACCOUNTS] = [...accounts];
        state[FIELDS_STATE.INCOGNITO_ERROR] = initState[FIELDS_STATE.INCOGNITO_ERROR];
        state[FIELDS_STATE.INCOGNITO_LOADING] = false;
    },
    [nameActs.onIncognitoAccountSelected]: (state, action) => {
        console.log(action);
        // const { payload } = action;
        state[FIELDS_STATE.ACCOUNT_SELECTED] = 1;
    },
    [nameActs.onIncognitoError]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_ERROR] = payload;
    },
});

export default incognitoDataReducer;
