import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsersComponent } from './Components/users/users.component';
import { FormComponent } from './Components/form/form.component';
import { PostsComponent } from './Components/posts/posts.component';

@NgModule({
  declarations: [
    AppComponent,
    UsersComponent,
    FormComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
