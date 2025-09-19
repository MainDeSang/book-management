import { Actions, createEffect, ofType } from "@ngrx/effects";
import { BookService } from "./book.service";
import {  Injectable } from "@angular/core";
import * as bookActions from "./book.actions";
import { mergeMap, map, catchError, of } from "rxjs";

@Injectable()
export class BookEffects {

    // This is a NgRx Effect that listens and responds for the AddBook actions.
    addBook$ = createEffect(() => this.actions$.pipe(
        
        // Listen for actions of type 'AddBook'.
        ofType(bookActions.AddBook),

        // For each AddBook action, call 'addBook' method of BookService.
        // 'mergeMap' allows multiple concurrent 'addBook' calls.
        mergeMap(action => this.bookService.addBook(action).
        pipe(

            // If the 'addBook' call is successful, dispatch 'AddBookSuccess' action with the book data.
            map(book => bookActions.AddBookSuccess(book)),

            // If the 'addBook' call fails, dispatch 'AddBookFailure' action with the error.
            catchError(error => of(bookActions.AddBookFailure({ error })))
        ))
    ));

    constructor(
        private actions$: Actions,
        private bookService: BookService
    ) {}}