import { currencies } from "./array";

describe("currencies",()=>{
    it("should contain egp currency ",()=>{
        const res=currencies();
        expect(res).toContain('Egp');
    })
    it("the should contain 3 currencies",()=>{
        const res=currencies();
        expect(res.length).toBe(3)
    })
})