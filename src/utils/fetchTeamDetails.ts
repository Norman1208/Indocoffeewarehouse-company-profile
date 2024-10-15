export interface User {
    name: {
        first: string;
        last: string;
    };
    email: string;
    picture: {
        large: string;
        medium: string;
        thumbnail: string;
    };
    position: string;
    location: {
        city: string;
        state: string;
        country: string;
    };
}

export const fetchTeamDetails = async () : Promise<User[]> => {
    const response = await fetch('https://randomuser.me/api/?results=10');
    if (!response.ok) {
        throw new Error('Failed to fetch team details.');
    }

    const data = await response.json();
    return data.results;
}
    