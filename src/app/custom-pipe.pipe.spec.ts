import { Custom } from './custom-pipe.pipe';


describe('TranckPipe', () => {
  let pipe : any;
  const num = 5;
  beforeEach(() => {
    pipe = new Custom();
  });
  it("Instance Created" , () => {
    
    expect(pipe).toBeTruthy()
  });
  it("won't print more than the length num" , ()=>{
    
    expect(pipe.transform("Name" , num)).toEqual("Name")
  });
  it("print ... to replace the name if exceeded the num" , ()=>{
    
    expect(pipe.transform("NameNameName" , num)).toEqual("NameN...")
  });
});
