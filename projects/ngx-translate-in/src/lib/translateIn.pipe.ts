import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Pipe({
  name: 'translateIn',
})
export class TranslateInPipe implements PipeTransform {
  constructor(private translate: TranslateService) {}

  transform(key: string, lang: string): Observable<string> {
    let currentLang = this.translate.currentLang;
    return this.translate.getTranslation(lang).pipe(
      map((res) => {
        this.translate.use(currentLang);
        return res[key];
      })
    );
  }
}
