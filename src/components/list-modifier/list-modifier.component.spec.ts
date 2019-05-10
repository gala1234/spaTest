import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListModifierComponent } from './list-modifier.component';

describe('ListModifierComponent', () => {
  let component: ListModifierComponent;
  let fixture: ComponentFixture<ListModifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListModifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListModifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
