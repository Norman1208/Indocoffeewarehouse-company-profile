import { useTeamDetails } from "@/hooks/useTeamDetails";
import { FC } from "react";
import Image from "next/image";


const AllTeams: FC = () => {
    const {team, loading, error} = useTeamDetails();

    if (loading) {
        return <div>Loading team details...</div>
    }

    if (error) {
        return <div>Error fetching team details</div>
    }

    return (
        <div>
            {team.map((user, index) => (
                <div key={index} className="team-member pt-10">
                    <Image src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} 
                    width={200} height={200} layout="responsive"/>
                    <h3>{user.name.first} {user.name.last}</h3>
                    <p>Staff</p>
                    <p>{user.location.city}, {user.location.state}, {user.location.country}</p>
                    <p>{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default AllTeams;