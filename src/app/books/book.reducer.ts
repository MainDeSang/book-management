import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, AddBookFailure, AddBookSuccess, RemoveBook } from "./book.actions";

// initial state
export const initialState: Book[] = [];

// reducer function
// handles adding and removing books
// updates the state immutably
// => new state is returned
export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state) => { return state }),
    on(AddBookSuccess, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(AddBookFailure, (state, { error }) => { console.error('Add book failed', error); return state }),
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
); 