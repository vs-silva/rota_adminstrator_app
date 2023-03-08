import type {RotasServiceDrivenPort} from "../ports/rotas-service-driven.port";

export function RotasApiMockAdapter(): RotasServiceDrivenPort {

    const mockData = [
        {
            "id": 1,
            "type": "morning",
            "date": "2022-05-20",
            "userId": 9,
            "startDate": "2023-01-21",
            "endDate": "2022-08-03"
        },
        {
            "id": 2,
            "type": "afternoon",
            "date": "2022-11-08",
            "userId": 5,
            "startDate": "2022-10-23",
            "endDate": "2023-04-12"
        },
        {
            "id": 3,
            "type": "afternoon",
            "date": "2022-06-29",
            "userId": 10,
            "startDate": "2022-09-21",
            "endDate": "2022-09-14"
        },
        {
            "id": 4,
            "type": "afternoon",
            "date": "2022-02-23",
            "userId": 2,
            "startDate": "2022-11-04",
            "endDate": "2022-12-19"
        },
        {
            "id": 5,
            "type": "afternoon",
            "date": "2022-11-17",
            "userId": 8,
            "startDate": "2023-06-02",
            "endDate": "2022-09-06"
        },
        {
            "id": 6,
            "type": "afternoon",
            "date": "2022-09-06",
            "userId": 9,
            "startDate": "2022-05-02",
            "endDate": "2022-03-07"
        },
        {
            "id": 7,
            "type": "morning",
            "date": "2022-11-30",
            "userId": 8,
            "startDate": "2022-09-28",
            "endDate": "2022-12-12"
        },
        {
            "id": 8,
            "type": "afternoon",
            "date": "2023-04-17",
            "userId": 10,
            "startDate": "2022-09-28",
            "endDate": "2022-09-03"
        },
        {
            "id": 9,
            "type": "morning",
            "date": "2022-09-18",
            "userId": 1,
            "startDate": "2023-06-04",
            "endDate": "2022-04-08"
        },
        {
            "id": 10,
            "type": "afternoon",
            "date": "2022-07-18",
            "userId": 9,
            "startDate": "2022-12-14",
            "endDate": "2023-06-07"
        }
    ];

    async function get(resource:string): Promise<object[]> {
        return Promise.resolve(mockData);
    }

    async function getByID(resource:string, resourceID: string): Promise<object> {
        const result = mockData.find(data => data.id.toString() === resourceID);

        if(!result) {
            return Promise.resolve({});
        }

        return Promise.resolve(result);
    }

    return {
        get,
        getByID
    };
}
