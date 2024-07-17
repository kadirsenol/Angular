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

export function matchPassword() : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    const password: string = control.get("password").value;
    const passwordConfirm : string = control.get("passwordConfirm").value;

    if(password != passwordConfirm){
      return {"noMatch" : true}
    }
    return null ;
  };
}


export function parameterValid(parameter1? : string, parameter2? : string) : ValidatorFn {
  return (control : AbstractControl) : ValidationErrors | null => {
    const value1 : string = control.get("inputone").value;
    const value2 : string = control.get("inputtwo").value;

    const total: string = value1 + value2
    if(total === "sd"){
      return {"noIn" : true};
    }
    return null ;
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
