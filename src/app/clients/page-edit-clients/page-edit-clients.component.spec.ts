import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PageEditClientsComponent } from './page-edit-clients.component';

describe('PageEditClientsComponent', () => {
  let component: PageEditClientsComponent;
  let fixture: ComponentFixture<PageEditClientsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [PageEditClientsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PageEditClientsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
