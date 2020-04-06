export default class CarPosition {
  lat: number;
  lon: number;
  brand: string;
  id: number;

  constructor(id: number, lat: number, lon: number, brand: string) {
    this.id = id;
    this.lat = lat;
    this.lon = lon;
    this.brand = brand;
  }
}
