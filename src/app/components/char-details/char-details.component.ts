import { Component, OnInit } from '@angular/core';
import { CustomCharacter } from 'src/app/classes/character';
import { RickCharsGrabService } from '../../services/rick-chars-grab.service';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-char-details',
  templateUrl: './char-details.component.html',
  styleUrls: ['./char-details.component.less']
})
export class CharDetailsComponent implements OnInit {

  public character: CustomCharacter | undefined;
  public selectedCharacterID: number = 1;

  constructor(
    private RickCharsGrabService: RickCharsGrabService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe(params => {console.log(params); this.selectedCharacterID = Number(params.id)})
   };

  ngOnInit(): void {
    this.getSingleCharacterDetailed(this.selectedCharacterID);
  };

  public getSingleCharacterDetailed(id: number){
  this.RickCharsGrabService.getOneCharacter(id).subscribe((result: any) => {
    this.character = result;
    },
    error => { alert("Something went wrong!") }
    );
  }

}
