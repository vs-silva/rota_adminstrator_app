export interface RotasServiceDrivenPort {
    get(resource:string): Promise<object[]>;
    getByID(resource:string, resourceID: string): Promise<object>;
}
