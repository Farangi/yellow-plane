import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostViewerComponent } from './photo-post-viewer.component';

describe('PhotoPostViewerComponent', () => {
  let component: PhotoPostViewerComponent;
  let fixture: ComponentFixture<PhotoPostViewerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPostViewerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostViewerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
