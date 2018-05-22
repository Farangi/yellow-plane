import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PhotoPostViewerContentComponent } from './photo-post-viewer-content.component';

describe('PhotoPostViewerContentComponent', () => {
  let component: PhotoPostViewerContentComponent;
  let fixture: ComponentFixture<PhotoPostViewerContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PhotoPostViewerContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PhotoPostViewerContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
