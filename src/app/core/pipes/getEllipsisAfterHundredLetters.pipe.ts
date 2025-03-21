import { Pipe, type PipeTransform } from '@angular/core';

@Pipe({
  name: 'appGetEllipsisAfterHundredLetters',
  standalone: true,
})
export class GetEllipsisAfterHundredLettersPipe implements PipeTransform {
  transform(letters: string): unknown {
    return letters.length > 75
      ? letters.slice(0, 70) + '...'
      : letters;
  }
}
