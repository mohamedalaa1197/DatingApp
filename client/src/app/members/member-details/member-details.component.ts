import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { NgxGalleryAnimation, NgxGalleryImage, NgxGalleryOptions } from '@kolkov/ngx-gallery';
import { Member } from 'src/_models/Member';
import { MembersService } from 'src/_Services/members.service';

@Component({
  selector: 'app-member-details',
  templateUrl: './member-details.component.html',
  styleUrls: ['./member-details.component.css']
})
export class MemberDetailsComponent implements OnInit {

  constructor(private activeRoute:ActivatedRoute , private memberService : MembersService) { }

  galleryOptions: NgxGalleryOptions[];
  galleryImages: NgxGalleryImage[];

  currentMember : Member;

  loadMember(){
    this.memberService.getMemberByName(this.activeRoute.snapshot.paramMap.get("userName"))
        .subscribe(member => {
         this.currentMember = member    
         this.galleryImages =  this.getImages();
         console.log(this.currentMember); 
        })

        
  }

  ngOnInit(): void {

    this.loadMember();

    this.galleryOptions = [
      {
        width : "500px",
        height : "500px",
        imagePercent : 100,
        thumbnailsColumns : 4,
        imageAnimation : NgxGalleryAnimation.Slide,
        preview : false
      }
    ]
  }

  getImages() : NgxGalleryImage[] {
    const imgURLs = [];
    for (let photo of this.currentMember.photos){
      
      imgURLs.push({
        small : photo.url,
        medium : photo.url,
        big : photo.url
      })
    }
    console.log(imgURLs);
    return imgURLs;
  }
}
