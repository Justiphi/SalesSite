import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideRouter, RouterOutlet } from '@angular/router';
import { App } from './app';
import { Nav } from './nav/nav';

describe('App', () => {
  let fixture: ComponentFixture<App>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [App],
      imports: [Nav, RouterOutlet],
      providers: [provideRouter([])]
    }).compileComponents();

    fixture = TestBed.createComponent(App);
  });

  it('should create the app', () => {
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the navigation bar on every page', () => {
    fixture.detectChanges();

    const nav: HTMLElement = fixture.nativeElement.querySelector('app-nav');
    expect(nav).toBeTruthy();

    const labels = Array.from(nav.querySelectorAll('.links a')).map((a) => a.textContent?.trim());
    expect(labels).toEqual(['Home', 'Products', 'About', 'Contact']);
  });
});
