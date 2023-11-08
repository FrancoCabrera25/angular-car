import { TableTurnColumn } from '../components/turn-table/turn-table.component';
import { Turn } from '../interface/turn.interface';

export const TABLE_TURN_COLUMN: TableTurnColumn[] = [
  {
    columnDef: 'date',
    header: 'Fecha',
    type: 'text',
    cell: (element: Turn) => element.date.toString(),
    isOrder: true,
    directionOrder: 'ASC',
  },
  {
    columnDef: 'hour',
    header: 'Hora',
    type: 'text',
    cell: (element: Turn) => element.hour,
    isOrder: true,
    directionOrder: 'ASC',
  },
  {
    columnDef: 'status',
    header: 'Estado',
    type: 'text',
    cell: (element: Turn) => element.status,
    isOrder: true,
    directionOrder: 'ASC',
  },
  {
    columnDef: 'patent',
    header: 'Vehiculo',
    type: 'text',
    cell: (element: Turn) => element.vehicleId.patent,
    isOrder: true,
    directionOrder: 'ASC',
  },
];
