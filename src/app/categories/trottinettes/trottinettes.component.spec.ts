import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrottinettesComponent } from './trottinettes.component';

describe('TrottinettesComponent', () => {
  let component: TrottinettesComponent;
  let fixture: ComponentFixture<TrottinettesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TrottinettesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrottinettesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
