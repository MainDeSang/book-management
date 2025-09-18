import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, RemoveBook } from "./book.actions";

// initial state
export const initialState: Book[] = [];

// reducer function
// handles adding and removing books
// updates the state immutably
// => new state is returned
export const BookReducer = createReducer(
    initialState,
    on(AddBook, (state, { id, title, author }) => [...state, { id, title, author }]),
    on(RemoveBook, (state, { bookId }) => state.filter(book => book.id !== bookId))
);