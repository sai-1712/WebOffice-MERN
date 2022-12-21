/* eslint-disable no-undef */
const initialState = [];

export const clientReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_Client":
            state = [...state, action.payload];
            return state;
        case "DELETE_Client":
            const clientFilter = state.filter((client) => (client.ClientID === action.payload ? null : client));
            state = clientFilter;
            return state;
        case "UPDATE_Client":
            const clientUpdate = state.filter((client) =>
                client.ClientID === action.payload.ClientID ? Object.assign(client, action.payload) : client
            );
            state = clientUpdate;
            return state;
        case "RESET_Client":
            state = [{ ClientID: null, Email: null, Mobile: null, Company: null }];
            return state;
        default:
            return state;
    }
};
