export interface UsersServiceDrivenPort {
    get(resource:string): Promise<object[]>;
}
