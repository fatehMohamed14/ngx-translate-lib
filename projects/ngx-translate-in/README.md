# NgxTranslateIn

This library was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.12.
This library will allow you to have multiple translation in the same time using a pipe `translateIn`, you can translate a part of your html content in English while the current language is French

## Install

Run `npm i mat-phone-code-validator --save`

## Usage

    import { BrowserModule } from '@angular/platform-browser';
    import { NgModule } from '@angular/core';
    import { HttpClientModule, HttpClient } from '@angular/common/http';
    import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
    import { TranslateHttpLoader } from '@ngx-translate/http-loader';
    import { AppComponent } from './app.component';
    import { NgxTranslateInModule } from 'ngx-translate-in';

    export function translateHttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
    }
    @NgModule({
        declarations: [AppComponent],
        imports: [
            BrowserModule,
            HttpClientModule,
            TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: translateHttpLoaderFactory,
                deps: [HttpClient],
                    },
             }),
            NgxTranslateInModule, // import the module
        ],
        providers: [],
        bootstrap: [AppComponent],
    })
    export class AppModule {}

If you need a text to be in french while the current language is english, you can use the pipe like this:

        <div>{{'translationKey' | translateIn: "fr" | async}}</div> <!-- translated in french -->
        <div> {{"text1" | translate}} </div> <!-- translated in english -->
        <div> {{"text2" | translate}} </div> <!-- translated in english -->
