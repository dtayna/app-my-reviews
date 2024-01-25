import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './app/components/nav/nav.component';
import { NgIconsModule } from '@ng-icons/core';
import { bootstrapCircleHalf } from '@ng-icons/bootstrap-icons';
import { NewReviewFormComponent } from './app/components/new-review-form/new-review-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ProfilePictureComponent } from './app/components/profile-picture/profile-picture.component';
import { NgxDropzoneModule } from 'ngx-dropzone';
import { ButtonComponent } from './global/button/button.component';
import { AccessibilityNavComponent } from './app/components/accessibility-nav/accessibility-nav.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    NewReviewFormComponent,
    ProfilePictureComponent,
    ButtonComponent,
    AccessibilityNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgIconsModule.withIcons({ bootstrapCircleHalf }),
    ReactiveFormsModule,
    NgxDropzoneModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
