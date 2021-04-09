import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TvCarouselComponent } from './tv-carousel.component';

describe('TvCarouselComponent', () => {
  let component: TvCarouselComponent;
  let fixture: ComponentFixture<TvCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TvCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TvCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
