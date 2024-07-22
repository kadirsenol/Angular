import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-photos-with-resolve-guard',
  template: `
            <ul>
                <li *ngFor="let photo of photos">
                        <a href="{{photo.url}}" >{{photo.url}}</a>
                </li>
            </ul>
  `,
  styles: []
})
export class PhotosWithResolveGuardComponent implements OnInit {

  constructor(private activatedRoute: ActivatedRoute) { }
  photos: any;

  ngOnInit(): void {
    this.activatedRoute.data.subscribe((data) => this.photos = data["photos"]);
  }
}
