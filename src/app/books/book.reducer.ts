import { createReducer, on } from "@ngrx/store";
import { Book } from "../models/book";
import { AddBook, RemoveBook } from "./book.actions";

export const initialState: ReadonlyArray<Book> = [];

export const bookReducer = createReducer(
    initialState,
);