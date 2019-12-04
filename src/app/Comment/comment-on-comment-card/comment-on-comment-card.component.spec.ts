import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommentOnCommentCardComponent } from './comment-on-comment-card.component';

describe('CommentOnCommentCardComponent', () => {
  let component: CommentOnCommentCardComponent;
  let fixture: ComponentFixture<CommentOnCommentCardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommentOnCommentCardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommentOnCommentCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
