import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../services/turn.service';
import { TABLE_TURN_COLUMN } from '../../constants/turn.constants';
import { Turn } from '../../interface/turn.interface';

@Component({
  selector: 'app-turn-list-client',
  templateUrl: './turn-list-client.component.html',
  styleUrls: ['./turn-list-client.component.scss']
})
export class TurnListClientComponent implements OnInit {

  public turnComumnDef = TABLE_TURN_COLUMN;
  public turnList: Turn[] = [];

  constructor(private turnService: TurnService) {}

  ngOnInit(): void {
    this.turnService.getAllTurnByUser().subscribe((turns) => {
      console.log('turns', turns);
      this.turnList = turns;
    });
  }
}
