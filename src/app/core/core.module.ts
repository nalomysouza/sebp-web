import { NgModule, Optional, SkipSelf } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { AuthGuard } from './_helpers/auth.guard';
import { AuthService } from './_services/auth.service';
import { TokenStorageService } from './_services/token-storage.service';

@NgModule({
  imports: [
    CommonModule,
  ],
  providers: [
    AuthGuard,
    AuthInterceptorProviders,
    AuthService,
    TokenStorageService
  ]
})
export class CoreModule {
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    if (parentModule) {
      throw new Error(
        'CoreModule is already loaded. Import it in the AppModule only');
    }
  }
}
