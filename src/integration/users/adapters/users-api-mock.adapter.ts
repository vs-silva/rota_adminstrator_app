import {UsersServiceDrivenPort} from "../ports/users-service-driven.port";

export function UsersApiMockAdapter(): UsersServiceDrivenPort {

    const mockData = [
        {
            "id": 9,
            "last_name": "MacMarcuis",
            "first_name": "Suzy",
            "email": "smacmarcuis0@utexas.edu"
        },
        {
            "id": 10,
            "last_name": "Culshew",
            "first_name": "Daisey",
            "email": "dculshew1@nymag.com"
        },
        {
            "id": 5,
            "last_name": "Newey",
            "first_name": "Jessi",
            "email": "jnewey2@europa.eu"
        },
        {
            "id": 9,
            "last_name": "Peyton",
            "first_name": "Ladonna",
            "email": "lpeyton3@cnet.com"
        },
        {
            "id": 4,
            "last_name": "Posen",
            "first_name": "Vivi",
            "email": "vposen4@is.gd"
        },
        {
            "id": 9,
            "last_name": "Owbrick",
            "first_name": "Thelma",
            "email": "towbrick5@cdc.gov"
        },
        {
            "id": 7,
            "last_name": "Morfey",
            "first_name": "Aland",
            "email": "amorfey6@macromedia.com"
        },
        {
            "id": 5,
            "last_name": "Gorman",
            "first_name": "Ruddy",
            "email": "rgorman7@jigsy.com"
        },
        {
            "id": 10,
            "last_name": "Melson",
            "first_name": "Evan",
            "email": "emelson8@youtube.com"
        },
        {
            "id": 6,
            "last_name": "Dobbs",
            "first_name": "Juanita",
            "email": "jdobbs9@nhs.uk"
        }
    ];

    async function get(resource:string): Promise<object[]> {
        return Promise.resolve(mockData);
    }

    return {
      get
    };
}
