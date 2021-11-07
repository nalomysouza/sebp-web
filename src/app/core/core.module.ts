import { CommonModule } from '@angular/common';
import { NgModule, Optional, SkipSelf } from '@angular/core';
import { NzMessageModule } from 'ng-zorro-antd/message';
import { AuthGuard } from './_helpers/auth.guard';
import { AuthInterceptorProviders } from './_helpers/auth.interceptor';
import { HttpErrorInterceptorProviders } from './_helpers/http-error.interceptor';
import { TokenStorageService } from './_services/token-storage.service';

@NgModule({
  imports: [
    CommonModule,
    NzMessageModule
  ],
  providers: [
    AuthGuard,
    TokenStorageService,
    AuthInterceptorProviders,
    HttpErrorInterceptorProviders,
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
