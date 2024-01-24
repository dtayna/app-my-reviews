import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './app/components/nav/nav.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCircleHalf } from '@ng-icons/bootstrap-icons';
import { NewReviewFormComponent } from './app/components/new-review-form/new-review-form.component';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewReviewFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapCircleHalf }),
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
