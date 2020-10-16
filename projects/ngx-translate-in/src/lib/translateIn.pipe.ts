import { Pipe, PipeTransform } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Pipe({
  name: 'translateIn',
})
export class TranslateInPipe implements PipeTransform {
  constructor(private translate: TranslateService, private http: HttpClient) {}

  transform(key: string, lang: string): Observable<string> {
    const translatein = this.translate.getLangs().includes(lang)
      ? lang
      : this.translate.currentLang;
    return this.http.get(`/assets/i18n/${translatein}.json`).pipe(
      map((res) => {
        let translation = res;
        key.split('.').forEach((k) => {
          translation = translation[k];
        });
        return translation as string;
      })
    );
  }
}
