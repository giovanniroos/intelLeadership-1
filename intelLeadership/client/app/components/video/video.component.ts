import { Component } from '@angular/core';
 
@Component({
    selector: 'videoPlayer',
    template: `
        <h3>Some motivational videos</h3>

        <youtube-player 
            [videoId]="id" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>

        <youtube-player 
            [videoId]="id2" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>
          
          <youtube-player 
            [videoId]="id3" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>
          
          <youtube-player 
            [videoId]="id4" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>
          
          <youtube-player 
            [videoId]="id5" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>
          
          <youtube-player 
            [videoId]="id6" 
            (ready)="savePlayer($event)"
            (change)="onStateChange($event)">
          </youtube-player>  `
})
export class VideoComponent {
  id = 'HxEntJiIEd0';
  id2 = 'XxKJ4R99VCo';
  id3 = 'YVMBJ9kvl2g';
  id4 = 'VpKvQg5qRgk';
  id5 = 'EdR9XDhmE-A';
  id6 = '6U53QTun-w4';
  private player;
  private ytEvent;

  constructor() {
    
  }

  onStateChange(event) {
    this.ytEvent = event.data;
  }
  savePlayer(player) {
    this.player = player;
  }
  
  playVideo() {
    this.player.playVideo();
  }
  
  pauseVideo() {
    this.player.pauseVideo();
  }
}