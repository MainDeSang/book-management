import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// action to add a book
export const AddBook = createAction('[Book] Add Book', props<Book>());
// success and failure actions for async operations (if needed) *EFFECTS*
export const AddBookSuccess = createAction('[Book] Add Book Success', props<Book>());
export const AddBookFailure = createAction('[Book] Add Book Failure', props<{ error: any }>());
// action to remove a book by id
export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());