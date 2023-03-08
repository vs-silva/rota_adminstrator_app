import {describe, it, vi, expect} from "vitest";
import type {RotaDTO} from "../business/dtos/rota.dto";
import Rotas from "../index";
import {RotasServiceDrivenPort} from "../ports/rotas-service-driven.port";
import {RotasService} from "../rotas.service";
import {faker} from "@faker-js/faker";

describe('Rotas service tests', () => {

    const timeout:number = 60 * 1000;

    describe('Rotas service driver port tests', () => {

        it('getAllRotas should return a collection of RotaDTO', async () => {

            const spy = vi.spyOn(Rotas, 'getAllRotas');
            const result = await Rotas.getAllRotas();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith();
            expect(result.length).toBeGreaterThan(0);

            expect(result).toEqual(expect.arrayContaining(<RotaDTO[]>[
                expect.objectContaining(<RotaDTO>{
                    id: expect.any(Number),
                    type: expect.any(String),
                    date: expect.any(String),
                    startDate: expect.any(String),
                    endDate: expect.any(String),
                    userID: expect.any(Number)
                })
            ]));

            for (const rota of result) {
                for (const rotaKey of Object.keys(rota)) {

                    if(rotaKey === 'id' || rotaKey === 'userID') {
                        expect(rota[rotaKey]).toBeGreaterThan(0);
                        continue;
                    }

                    // @ts-ignore
                    expect(rota[rotaKey].trim()).not.toEqual('');
                }
            }

        }, timeout );

        it('getAllRotas should return an empty collection of RotaDTO if no data is provided from the api service', async () => {

            const fakeAdapter: RotasServiceDrivenPort = {
                get: (resource: string): Promise<object[]> => { return Promise.resolve([]); },
                getByID: (resource: string, resourceID: string): Promise<object> => { return Promise.reject(); }
            };

            const fakeRotasService = RotasService(fakeAdapter);

            const spy = vi.spyOn(fakeRotasService, 'getAllRotas');
            const result = await fakeRotasService.getAllRotas();

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith();
            expect(result.length).toBe(0);

            expect(result).toEqual(expect.arrayContaining(<RotaDTO[]>[]));

        }, timeout );

        it('getRotaByID should return a RotaDTO', async () => {

            const rotaIdNumber: number = parseInt(faker.random.numeric(1));

            const spy = vi.spyOn(Rotas, 'getRotaByID');
            const result = await Rotas.getRotaByID(rotaIdNumber);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(rotaIdNumber);
            expect(result).not.toBeNull();

            expect(result).toEqual(
                expect.objectContaining(<RotaDTO>{
                id: expect.any(Number),
                type: expect.any(String),
                date: expect.any(String),
                startDate: expect.any(String),
                endDate: expect.any(String),
                userID: expect.any(Number)
                })
            );

            for (const rotaKey of Object.keys(result)) {

                if(rotaKey === 'id' || rotaKey === 'userID') {
                    expect(result[rotaKey]).toBeGreaterThan(0);
                    continue;
                }

                // @ts-ignore
                expect(result[rotaKey].trim()).not.toEqual('');
            }

        }, timeout );

        it('getRotaByID should return a RotaDTO', async () => {

            const rotaIdNumber: number = parseInt(faker.random.numeric(3));

            const fakeAdapter: RotasServiceDrivenPort = {
                get: (resource: string): Promise<object[]> => { return Promise.resolve([]); },
                getByID: (resource: string, resourceID: string): Promise<object> => { return Promise.resolve({}); }
            };

            const fakeRotasService = RotasService(fakeAdapter);

            const spy = vi.spyOn(fakeRotasService, 'getRotaByID');
            const result = await fakeRotasService.getRotaByID(rotaIdNumber);

            expect(spy).toHaveBeenCalled();
            expect(spy).toHaveBeenCalledOnce();
            expect(spy).toHaveBeenCalledWith(rotaIdNumber);
            expect(result).not.toBeNull();

            for (const rotaKey of Object.keys(result)) {

                if(rotaKey === 'id' || rotaKey === 'userID') {
                    expect(result[rotaKey]).toBeNaN();
                    continue;
                }

                // @ts-ignore
                expect(result[rotaKey]).toBeUndefined();
            }

        }, timeout);



    });

});
