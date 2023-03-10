import {describe, it, vi, expect} from "vitest";
import type {UserDTO} from "../business/dtos/user.dto";
import Users from "../index";
import {UsersServiceDrivenPort} from "../ports/users-service-driven.port";
import {UsersService} from "../users.service";

describe('Users service tests', () => {

    const timeout:number = 60 * 1000;

    describe('Users service driver port tests', () => {

        it('getAllUsers should return a collection of UserDTO', async () => {

            const spy = vi.spyOn(Users, 'getAllUsers');
            const result = await Users.getAllUsers();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith();
            expect(result.length).toBeGreaterThan(0);

            expect(result).toEqual(expect.arrayContaining(<UserDTO[]>[
                expect.objectContaining(<UserDTO>{
                    id: expect.any(Number),
                    name: expect.any(String),
                    email: expect.any(String)
                })
            ]));

        }, timeout );

        it('getAllUsers should return an empty collection of UserDTO if no data is provided from the api service', async () => {

            const fakeAdapter: UsersServiceDrivenPort = {
                get: (resourceURI: string): Promise<object[]> => { return Promise.resolve([]); }
            };

            const fakeUserService = UsersService(fakeAdapter);


            const spy = vi.spyOn(fakeUserService, 'getAllUsers');
            const result = await fakeUserService.getAllUsers();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith();
            expect(result.length).toBe(0);

            expect(result).toEqual(expect.arrayContaining(<UserDTO[]>[]));

        }, timeout );

    });



});
