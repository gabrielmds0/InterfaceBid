import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BodyGridComponent } from './body-grid.component';

describe('BodyGridComponent', () => {
  let component: BodyGridComponent;
  let fixture: ComponentFixture<BodyGridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BodyGridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BodyGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
