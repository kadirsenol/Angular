import { AbstractControl, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";

export function lessThanFiveValidator(): ValidatorFn {
    return (control: AbstractControl): ValidationErrors | null => {
        const value = control.value;
        if (value < 5) {
            return { lessThanFive: true };
        }
        return null;
    };
}

export function notIstanbul(): ValidatorFn {
    return (control : AbstractControl) : ValidationErrors | null => {
        const value = control.value;
        if(value === 'Istanbul' || value === 'istanbul'){
            return {noIstanbul : true};                        
        }
        return null;
    }
}


export function validateAllFormFields(formGroup : FormGroup){
    Object.keys(formGroup.controls).forEach(field =>{
      const control = formGroup.get(field);
      if(control instanceof FormGroup){
        this.validateAllFormFields(control);
      } else {
        control.markAsTouched({onlySelf: true});
      }
    })
  }
