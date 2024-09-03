import { Component, ElementRef, Input, ViewChild } from '@angular/core';

@Component({
  selector: 'app-diagram',
  styles: `
    .scrollContainer {
      position: fixed;
      overflow-x: scroll;
      width: 90%;
      white-space: nowrap;
      height: 96vh;
    }

    img {
      height: 100%;
      display: block;
      max-width: none;
    }

    .scrollContainer::-webkit-scrollbar {
      height: 8px;
      background-color: #000000;
    }

    .scrollContainer::-webkit-scrollbar-thumb {
      background: rgba(0, 157, 255, 0.5);
      border-radius: 5px;
    }

    .scrollContainer::-webkit-scrollbar-thumb:hover {
      background: rgba(94, 195, 255, 0.8);
      border-radius: 5px;
    }`,
  template: `<mat-card>
    <mat-card-content>
      <div #scrollContainer class="scrollContainer" (wheel)="onWheel($event)">
        <img [src]="imagePath">
      </div>
    </mat-card-content>
  </mat-card>`,
})
export class DiagramComponent {
  @Input() imagePath: string = '';
  @ViewChild('scrollContainer') scrollContainer!: ElementRef;

  onWheel($event: WheelEvent) {
    const target = this.scrollContainer.nativeElement;
    const scrollLeft = target.scrollLeft;
    target.scrollTo({left: scrollLeft + $event.deltaX });
  }

}
