import { vehicleItem } from "../vehicle/vehicle-item";

export interface Booking{
    vehicle?:vehicleItem[];
    id?:number;
    bookingStart:Date;
    bookingEnd:Date;
    price?:number;
}