import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

//@Injectable()
export class GenericServiceService {
  value = 'real value';

  getValue() { return this.value; }
  setValue(value: any) 
  { 
    this.value = value; 
  }

  getObservableValue() { return of('observable value'); }

  getPromiseValue() { return Promise.resolve('promise value'); }

  getObservableDelayValue() {
    return of('observable delay value').pipe(delay(10));
  }
}



