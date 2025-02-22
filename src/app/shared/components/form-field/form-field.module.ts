import { NgModule } from '@angular/core';
import { FormFieldDirective } from './directives/form-field.directive';
import { FormFieldComponent } from './form-field.component';

@NgModule({
  declarations: [],
  imports: [FormFieldComponent, FormFieldDirective],
  exports: [FormFieldComponent, FormFieldDirective],
})
export class FormFieldModule {}
