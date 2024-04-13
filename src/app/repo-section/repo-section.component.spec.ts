import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RepoSectionComponent } from './repo-section.component';

describe('RepoSectionComponent', () => {
  let component: RepoSectionComponent;
  let fixture: ComponentFixture<RepoSectionComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [RepoSectionComponent],
    });

    fixture = TestBed.createComponent(RepoSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
