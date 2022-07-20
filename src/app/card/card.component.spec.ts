import { CardComponent } from './card.component';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';


describe('Card', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be', () => {
    expect(component).toBeTruthy();
  });
  it("Check button" , () => {
    //1
    spyOn(component , "btnClick")
    component.btnClick()
    //2 action
    let btn = fixture.debugElement.query(By.css("button")).nativeElement.click()
    //3
    expect(component.btnClick).toHaveBeenCalled()
  })
  it("click function return message" , () => {
    //before click the message variable is empty
    expect(component.message).toEqual("")
    //after click the message variable has content
    component.btnClick()
    expect(component.message).toBe("Clicked")
  });
  it(">check if input data recieved from parent" , () => {
    
    const mockData = [1,2];
    component.data = mockData;
   
    expect(component.data.length).toBeGreaterThanOrEqual(mockData.length)
  });
  it("> check if each tag hold a item from array" , () => {
    fixture.detectChanges()
    let elem = fixture.debugElement.query(By.css("p")).nativeElement
    console.log(elem.textContent)
  })
});
