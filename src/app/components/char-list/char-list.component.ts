import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickCharsGrabService } from '../../services/rick-chars-grab.service';
import { CustomCharacter, StatusEnum } from '../../classes/character';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.less']
})
export class CharListComponent implements OnInit {


  searchName = "";
  public charList: CustomCharacter[] = [];
  public lastLoadedPage: number = 0;
  public maxReached: boolean = false;

  constructor(private RickCharsGrabService: RickCharsGrabService, private router: Router) { }

  ngOnInit(): void {
    this.getCharList(1);
    this.getCharList(2);
  }

  public getCharList(page: number) {  
    this.RickCharsGrabService.getTwentyCharList(page).subscribe((characters: any) => {
      this.charList = this.charList.concat(characters.results);
      this.lastLoadedPage++;
    },
    error => this.maxReached = true
    );
  }

  public onScroll(){
    if(!this.maxReached)
    this.getCharList(this.lastLoadedPage + 1);
  }

  public navDetails(status: string, id: number){
    console.log("hello there")
    if (status === "Alive") {
      this.router.navigate(["../details/"+id]);
    } else {
      alert("Character is Dead or has unknown status, please pick another character.")
    }
  }
}
