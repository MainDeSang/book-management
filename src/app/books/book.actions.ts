import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// action to add a book
export const AddBook = createAction('[Book] Add Book', props<Book>());
// action to remove a book by id
export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());