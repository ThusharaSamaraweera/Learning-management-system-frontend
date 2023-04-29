import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'userInitials',
})
export class UserInitialsPipe implements PipeTransform {
  constructor() {}

  transform(fullName: string): string {
      // CUSTOMER INITIALS
      const names = fullName.split(' ');
      const firstNameChar: string = names[0].charAt(0);
      const lastNameChar: string = names.length === 1 ? '' : names[names.length - 1].charAt(0);
      return `${firstNameChar}${lastNameChar}`;
  }
}
