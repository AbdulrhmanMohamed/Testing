
import { compute } from './fund_test';

describe('compute',()=>{
    it(">Should Return 0 when the inut in < 0",()=>{
        const res=compute(-1);
        // lets assert the output 
        expect(res).toBe(0)
    })
    it("shoudlbe res +1 when the number > 0",()=>{
        const res =compute(1);
        console.log(res)
        expect(res).toBe(2)
    })
})