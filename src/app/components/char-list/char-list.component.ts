import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RickCharsGrabService } from '../../services/rick-chars-grab.service';
import { CustomCharacter } from '../../classes/character';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.less']
})



export class CharListComponent implements OnInit {

  public filterName!: string;
  public filterStatus!: string;

  searchName = "";
  public charList: CustomCharacter[] = [];
  public lastLoadedPage: number = 0;
  public maxReached: boolean = false;

  constructor(private RickCharsGrabService: RickCharsGrabService, private router: Router) { }

  ngOnInit(): void {
    this.getCharList(1);
    this.getCharList(2);
  }

  public getCharList(page: number, name?: string, status?: string, species?: string, type?: string, gender?: string) {  
    this.RickCharsGrabService.getTwentyCharList(page, name, status).subscribe((characters: any) => {
      this.charList = this.charList.concat(characters.results);
      this.lastLoadedPage++;
    },
    error => this.maxReached = true
    );
  }

  public onScroll(){
    if(!this.maxReached)
    this.getCharList(this.lastLoadedPage + 1, this.filterName, this.filterStatus);
  }

  public onFilterName(filterName?: string){
    if (filterName) this.filterName = filterName;
    this.charList = [];
    this.lastLoadedPage = 0;
    this.getCharList(1, this.filterName, this.filterStatus);
    this.getCharList(2, this.filterName, this.filterStatus);
  }

  public onFilterStatus(filterStatus?: string){
    
    if (filterStatus !== undefined) {console.log(filterStatus); this.filterStatus = filterStatus; }
    this.charList = [];
    this.lastLoadedPage = 0;
    this.getCharList(1, this.filterName, this.filterStatus);
    this.getCharList(2, this.filterName, this.filterStatus);
  }

  public navDetails(status: string, id: number){
    if (status === "Alive") {
      this.router.navigate(["../details/"+id]);
    } else {
      alert("Character is Dead or has unknown status, please pick another character.")
    }
  }
}
