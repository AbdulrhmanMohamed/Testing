import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { GenericServiceService } from './generic-service.service';

describe("ValueService" , () => {

  let comp : GenericServiceService;
    beforeEach( () => {
         comp = new GenericServiceService();
    });

    it("should return a value" , () => {
        //arrange
        let val = comp.value;
        //action

        //asset
        expect(comp.getValue()).toBe(val);
    });
    it("should assign the old value to new value" , ()=>{
        //arrange
       
        //asset
        comp.setValue('Hell');
        let value=comp.value;
        console.log(value)

        // expect().toBe(comp.getValue());
        expect(value).toEqual(comp.getValue())
    });
    it("should retrieve all data" , () => {
        //arrange
        let data:any ;
        //action
        comp.getObservableValue().subscribe(res => data=res);
        console.log(data.length)
        //expect
        expect(data?.length).toBeGreaterThan(0)
    });
})