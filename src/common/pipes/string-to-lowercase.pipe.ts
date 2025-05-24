import { Injectable, PipeTransform } from '@nestjs/common';

@Injectable()
export class StringToLowerCasePipe implements PipeTransform {
  transform(value: any) {
    if (typeof value === 'string') {
      return value.toLowerCase();
    }
    return value;
  }
}
