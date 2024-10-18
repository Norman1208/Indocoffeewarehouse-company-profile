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
                <div key={index} className="team-member pt-10 bg-[#AF8F6F] justify-center items-center mt-5 px-5 shadow-lg rounded-md">
                    <Image src={user.picture.large} alt={`${user.name.first} ${user.name.last}`} 
                    width={200} height={200} layout="responsive"/>
                    <h3 className="text-center">{user.name.first} {user.name.last}</h3>
                    <p className="text-center">Staff</p>
                    <p className="text-center">{user.location.city}, {user.location.state}, {user.location.country}</p>
                    <p className="text-center">{user.email}</p>
                </div>
            ))}
        </div>
    )
}

export default AllTeams;