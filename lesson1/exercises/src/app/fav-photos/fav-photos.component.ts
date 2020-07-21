import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Fishy Photos';
  image1 = 'https://as2.ftcdn.net/jpg/02/22/62/43/500_F_222624349_GSeVoe14GmimWQK4OYSnEBPE0TwsaCqg.jpg';
  image2 = 'https://as1.ftcdn.net/jpg/02/57/08/78/500_F_257087817_FttkMRLEz6PyQBscMDpSZmFTXkYh9B1F.jpg';
  image3 = 'https://as2.ftcdn.net/jpg/02/24/06/63/500_F_224066370_WPhBdPGAj7GpOZDWeaVOUlSd85t4gM33.jpg';

  constructor() { }

  ngOnInit() {
  }

}