import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CoreModule }   from './core/core.module';
import { HomeModule } from './pages/home/home.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    CoreModule,
    
    HomeModule // apagar dps q criar as rotas
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
