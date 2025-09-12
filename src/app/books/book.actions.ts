import { createAction, props } from "@ngrx/store";
import { Book } from "../models/book";

const AddBook = createAction('[Book] Add Book', props<Book>());
const RemoveBook = createAction('[Book] Remove Book', props<{ bookId: string }>());