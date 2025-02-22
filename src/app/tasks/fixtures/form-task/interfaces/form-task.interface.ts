import { FormControl } from '@angular/forms';

export interface FormTaskI {
  title: FormControl<string>;
  expiration_date: FormControl<Date | null>;
}
