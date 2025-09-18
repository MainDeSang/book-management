import { Book } from './models/book';

// Define the overall application state interface
export interface AppState {
   readonly book: Book[];
}
