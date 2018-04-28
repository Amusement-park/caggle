import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DiscussionModifyComponent } from './discussion-modify.component';

describe('DiscussionModifyComponent', () => {
  let component: DiscussionModifyComponent;
  let fixture: ComponentFixture<DiscussionModifyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscussionModifyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscussionModifyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
