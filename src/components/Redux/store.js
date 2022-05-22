import { configureStore} from '@reduxjs/toolkit';
// import contactsReducer from './contactsSlice';
import { contactsAPI } from 'components/ContactsAPI/contactsAPI';

export const store = configureStore({
    reducer: { [contactsAPI.reducerPath]: contactsAPI.reducer},

    middleware: getDefaultMiddleware => 
        getDefaultMiddleware().concat(contactsAPI.middleware)
});