import { Component, OnInit } from '@angular/core';
import { RickCharsGrabService } from '../../services/rick-chars-grab.service';
import { CustomCharacter, StatusEnum } from '../../classes/character';

@Component({
  selector: 'app-char-list',
  templateUrl: './char-list.component.html',
  styleUrls: ['./char-list.component.less']
})
export class CharListComponent implements OnInit {

  public charList: CustomCharacter[] = []
  constructor(private RickCharsGrabService: RickCharsGrabService) { }

  ngOnInit(): void {
    this.getCharList(1);
  }

  public getCharList(page: number) {  
    this.RickCharsGrabService.getTwentyCharList(page).subscribe((characters: any) => {
      this.charList = characters.results;
    },
    error => alert('Something went wrong!')
    );
  }


}
