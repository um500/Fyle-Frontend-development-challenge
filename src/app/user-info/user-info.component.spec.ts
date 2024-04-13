import { TestBed, ComponentFixture, waitForAsync } from '@angular/core/testing';
import { UserInfoComponent } from './user-info.component';

describe('UserInfoComponent', () => {
  let component: UserInfoComponent;
  let fixture: ComponentFixture<UserInfoComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [UserInfoComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserInfoComponent);
    component = fixture.componentInstance;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display user information', () => {
    const userInfoWithName = {
      avatar_url: 'https://github.com/johndoe/avatar.png',
      name: 'John Doe',
      login: 'johndoe',
      bio: 'Software Developer',
      location: 'New York, USA',
      blog: 'https://johndoe.com',
    };

    const userInfoWithoutName = {
      avatar_url: 'https://github.com/johndoe/avatar.png',
      name: null,
      login: 'johndoe',
      bio: null,
      location: null,
      blog: null,
    };
    component.userInfo = userInfoWithName;
    fixture.detectChanges();

    const compiled = fixture.debugElement.nativeElement;

    expect(compiled.querySelector('.user-name').textContent).toContain('John Doe');
    expect(compiled.querySelector('img').getAttribute('src')).toEqual('https://github.com/johndoe/avatar.png');
    expect(compiled.querySelector('.user-bio').textContent).toContain('Software Developer');
    expect(compiled.querySelector('.user-location').textContent).toContain('New York, USA');
    expect(compiled.querySelector('.user-blog').getAttribute('href')).toEqual('https://johndoe.com');
    
    component.userInfo = userInfoWithoutName;
    fixture.detectChanges();

    expect(compiled.querySelector('.user-name').textContent).toContain(userInfoWithoutName.login);
    expect(compiled.querySelector('img').getAttribute('src')).toEqual('https://github.com/johndoe/avatar.png');
    expect(compiled.querySelector('.user-bio').textContent).toContain('-');
    expect(compiled.querySelector('.user-location').textContent).toContain('-');
    expect(compiled.querySelector('.user-blog').getAttribute('href')).toEqual('-');
  });


  it('should update userInfo when input changes', () => {
    const initialUserInfo = {
      avatar_url: 'initial-avatar-url',
      name: 'Initial User',
      login: 'initialuser',
      bio: 'Initial bio',
      location: 'Initial location',
      blog: 'https://initialblog.com',
    };

    const updatedUserInfo = {
      avatar_url: 'updated-avatar-url',
      name: 'Updated User',
      login: 'updateduser',
      bio: 'Updated bio',
      location: 'Updated location',
      blog: 'https://updatedblog.com',
    };

    component.userInfo = initialUserInfo;
    fixture.detectChanges();

    expect(component.userInfo).toEqual(initialUserInfo);

    component.userInfo = updatedUserInfo;
    fixture.detectChanges();

    expect(component.userInfo).toEqual(updatedUserInfo);
  });


  it('should not get rendered if input is empty', () => {
    const userInfo = null;

    component.userInfo = userInfo;
    fixture.detectChanges();
    const compiled = fixture.debugElement.nativeElement;
    
    expect(compiled.querySelector('.info-component')).toBeNull();    

  });
});
