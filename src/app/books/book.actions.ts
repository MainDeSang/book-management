import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

// action to add a book
export const AddBook = createAction('[Book] Add Book', props<Book>());
export const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());