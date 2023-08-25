export class CreateRouteDto {
    name: string;
    source: {
        lat: number;
        lng: number;
    };
    destination: {
        lat: number;
        lng: number;
    };
}
