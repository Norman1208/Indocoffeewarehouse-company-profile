import { fetchTeamDetails, User } from "@/utils/fetchTeamDetails";
import { useEffect, useState } from "react";


export const useTeamDetails = () => {
    const [team, setTeam] = useState<User[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchTeam = async () => {
            try {
                const response = await fetchTeamDetails();
                setTeam(response)
                
            } catch {
                setError('Error fetching team details');
            } finally {
                setLoading(false);
            }
        };
        fetchTeam();
    }, []);

    return { team, loading, error };
}