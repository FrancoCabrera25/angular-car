import { Component, OnInit } from '@angular/core';
import { TurnService } from '../../services/turn.service';

@Component({
  selector: 'app-turn-page',
  templateUrl: './turn-page.component.html',
  styleUrls: ['./turn-page.component.scss'],
})
export class TurnPageComponent implements OnInit {
  constructor(private turnService: TurnService) {}
  ngOnInit(): void {
    this.turnService.getAllTurnByUser().subscribe((turns) => {
      console.log('turns', turns);
    });
  }
}
