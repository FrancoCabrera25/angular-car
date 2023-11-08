import { Component, Input, OnInit } from '@angular/core';
import { Turn } from '../../interface/turn.interface';

export interface TableTurnColumn {
  columnDef: string;
  header: string;
  type: string;
  cell: (element: Turn) => string;
  isOrder: boolean;
  directionOrder?: 'ASC' | 'DESC';
}


@Component({
  selector: 'app-turn-table',
  templateUrl: './turn-table.component.html',
  styleUrls: ['./turn-table.component.scss'],
})
export class TurnTableComponent implements OnInit {
  @Input() columns: TableTurnColumn[] = [];
  @Input() dataSource: Turn[] = [];

  public displayedColumns: any;

  ngOnInit(): void {
    this.displayedColumns = this.columns.map(
      (c: { columnDef: any }) => c.columnDef
    );
  }
}
