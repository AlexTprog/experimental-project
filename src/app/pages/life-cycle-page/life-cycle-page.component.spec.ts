import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LifeCyclePageComponent } from './life-cycle-page.component';

describe('LifeCyclePageComponent', () => {
  let component: LifeCyclePageComponent;
  let fixture: ComponentFixture<LifeCyclePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LifeCyclePageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LifeCyclePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
