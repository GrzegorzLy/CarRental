const SPEED = 0.0001;
const SAFE_AREA = 0.012;
export default class CarPosition {
  id: number;
  lat: number;
  lng: number;
  brand: string;
  private _lat: number;
  private _lng: number;
  private direction: Array<number>;

  constructor(id: number, lat: number, lng: number, brand: string) {
    this.id = id;
    this.lat = lat - Math.random() * 0.05;
    this.lng = lng - Math.random() * 0.05;
    this.brand = brand;
    this._lat = lat;
    this._lng = lng;
    this.direction = [id % 2, (id + 1) % 2];
  }

  move() {
    this.checkDirection();
    this.lat += this.direction[0] ? -SPEED : SPEED;
    this.lng += this.direction[1] ? -SPEED : SPEED;
  }

  private checkDirection() {
    if (this.lng > this._lng + SAFE_AREA) {
      this.direction[1] = 1;
    }
    if (this.lng < this._lng - SAFE_AREA) {
      this.direction[1] = 0;
    }
    if (this.lat > this._lat + SAFE_AREA) {
      this.direction[0] = 1;
    }
    if (this.lat < this._lat - SAFE_AREA) {
      this.direction[0] = 0;
    }
  }
}
