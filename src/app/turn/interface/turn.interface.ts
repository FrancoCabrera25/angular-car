export interface Turn {
  _id: string;
  date: Date;
  hour: string;
  status: string;
  vehicleId: Vehicle;
}

export interface Vehicle {
  _id: string;
  patent: string;
}
