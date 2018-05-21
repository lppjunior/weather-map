import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components-module';

import { ServiceModule } from './services/service-module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        BrowserModule,
        HttpClientModule,
        ComponentsModule,

        ServiceModule
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule { }
