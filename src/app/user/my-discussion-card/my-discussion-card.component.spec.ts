import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyDiscussionCardComponent } from './my-discussion-card.component';

describe('MyDiscussionCardComponent', () => {
  let component: MyDiscussionCardComponent;
  let fixture: ComponentFixture<MyDiscussionCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyDiscussionCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyDiscussionCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
