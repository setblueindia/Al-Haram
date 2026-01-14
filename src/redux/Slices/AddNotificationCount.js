import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    data: 0,
    loader: false
};

export const NotificationCount = createSlice({
    name: 'NotificationCount',
    initialState,

    reducers: {
        addNotificationCount(state, action) {
            state.data = action.payload;

        },
        updateNotificationCount(state, action) {
            state.loader = action.payload
        },
    },
});

export const { addNotificationCount, updateNotificationCount } = NotificationCount?.actions;

export default NotificationCount?.reducer;
