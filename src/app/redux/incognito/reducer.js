import { createReducer } from '@reduxjs/toolkit';
import { cloneDeep } from 'lodash';
import * as nameActs from './actions';
import { FIELDS_STATE } from './consts';

export const initState = {
    [FIELDS_STATE.ACCOUNTS]: [],
    [FIELDS_STATE.ACCOUNT_SELECTED]: null,
    [FIELDS_STATE.INCOGNITO_ERROR]: null,
    [FIELDS_STATE.INCOGNITO_LOADING]: false,
    [FIELDS_STATE.INCOGNITO_PRIVACY_TOKENS]: null,
    [FIELDS_STATE.INCOGNITO_PCUSTOM_TOKENS]: null,
    [FIELDS_STATE.INCOGNITO_PCUSTOM_TOKEN_ERROR]: null,
    [FIELDS_STATE.INCOGNITO_PRIVACY_TOKEN_SELECTED]: null,
};

const incognitoDataReducer = createReducer(initState, {
    [nameActs.onIncognitoGetPCustomeFailed]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKEN_ERROR] = payload;
        state[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKENS] = initState[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKENS];
    },
    [nameActs.onIncognitoGetPCustomeSucceeded]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKEN_ERROR] = initState[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKEN_ERROR];
        state[FIELDS_STATE.INCOGNITO_PCUSTOM_TOKENS] = payload;
    },
    [nameActs.onIncognitoPrivacyTokens]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_PRIVACY_TOKENS] = payload;
    },
    [nameActs.onIncognitoGetAccounts]: (state) => {
        state[FIELDS_STATE.INCOGNITO_LOADING] = true;
    },
    [nameActs.onIncognitoGetAccountsSucceeded]: (state, action) => {
        const { payload: accounts } = action;
        state[FIELDS_STATE.ACCOUNTS] = cloneDeep(accounts);
        state[FIELDS_STATE.INCOGNITO_LOADING] = false;
    },
    [nameActs.onIncognitoCreateAccountSucceeded]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.ACCOUNTS] = [...state[FIELDS_STATE.ACCOUNTS], cloneDeep(payload.account)];
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
        const { payload } = action;
        state[FIELDS_STATE.ACCOUNT_SELECTED] = payload;
    },
    [nameActs.onIncognitoError]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_ERROR] = payload;
    },
    [nameActs.onIncognitoPrivacyTokenSelected]: (state, action) => {
        const { payload } = action;
        state[FIELDS_STATE.INCOGNITO_PRIVACY_TOKEN_SELECTED] = payload;
    },
});

export default incognitoDataReducer;
