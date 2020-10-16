import { NgModule } from '@angular/core';
import { NgxTranslateInComponent } from './ngx-translate-in.component';
import { TranslateInPipe } from './translateIn.pipe';

@NgModule({
  declarations: [NgxTranslateInComponent, TranslateInPipe],
  imports: [],
  exports: [NgxTranslateInComponent, TranslateInPipe],
})
export class NgxTranslateInModule {}
