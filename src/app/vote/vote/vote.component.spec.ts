import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { VoteComponent } from './vote.component';
// allows to work with view of component
import { DebugElement } from '@angular/core';
// allows to work with elements of component
import { By } from '@angular/platform-browser';

describe('VoteComponent', () => {
  let component: VoteComponent;
  let fixture: ComponentFixture<VoteComponent>;

  let debugElement: DebugElement;
  let htmlElement: HTMLElement;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [VoteComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    debugElement = fixture.debugElement.query(By.css('h1'));
    htmlElement = debugElement.nativeElement;
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should display initial number of votes', () => {
    const initialVotes = component.totalVotes;
    expect(htmlElement.textContent).toContain('0');
  });

  it('should display upvoted number(currentVote = 0) after being downVoted', () => {
    // act
    component.upVote();
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:1');
  });

  it('should display downvoted number(currentVote = 0) after being downVoted', () => {
    // act
    component.downVote();
    fixture.detectChanges();
    expect(htmlElement.textContent).toBe('Votes:-1');
  });




});
