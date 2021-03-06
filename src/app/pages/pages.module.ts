import { LoginService } from './../shared/services/login-service/login.service';
import { LoggedGuardService } from './../shared/guards/logged-guard.service';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { routing } from './pages.routing';
import { NgaModule } from '../theme/nga.module';
import { AppTranslationModule } from '../app.translation.module';
// import { LoggedGuardService } from '../shared/guards/logged-guard.service';

import { Pages } from './pages.component';

@NgModule({
  imports: [
    CommonModule,
    AppTranslationModule,
    NgaModule,
    routing
  ],
  providers: [
    LoggedGuardService

  ],
  declarations: [Pages]
})
export class PagesModule {
}
