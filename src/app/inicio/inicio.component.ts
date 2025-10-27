import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  @ViewChild('carouselTrack', { static: false }) track!: ElementRef;
  currentIndex = 0;

  nextSlide() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const total = track.children.length;
    this.currentIndex = (this.currentIndex + 1) % total;
    track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }

  prevSlide() {
    const track = document.querySelector('.carousel-track') as HTMLElement;
    const total = track.children.length;
    this.currentIndex = (this.currentIndex - 1 + total) % total;
    track.style.transform = `translateX(-${this.currentIndex * 100}%)`;
  }
}
