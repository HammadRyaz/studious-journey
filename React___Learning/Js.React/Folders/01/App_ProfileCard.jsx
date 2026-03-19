import React, { useState } from "react";
import ProfileCard from "./ProfileCard";

const UsersData = [
    {
        id: 1,
        name: "Hamster",
        role: "Developer",
        pfp: "H",
        followers: 3020,
        following: 10,
        isOnline: true,
        isAdmin: true
    },
    {
        id: 2,
        name: "Panda",
        role: "Designer",
        pfp: "P",
        followers: 1220,
        following: 210,
        isOnline: false,
        isAdmin: false
    },
    {
        id: 3,
        name: "Cat",
        role: "DevOps",
        pfp: "C",
        followers: 4290,
        following: 74,
        isOnline: true,
        isAdmin: false
    },
];

const App_ProfileCard = () => {
    const [following, setFollowing] = useState(new Set());
    function toggleFollow(id) {
        setFollowing((prev) => {
            const next = new Set(prev);
            next.has(id) ? next.delete(id) : next.add(id);
            console.log(next);
            return next;
        });
    }

    return (
        <>
            <div className="flex flex-wrap">
                {UsersData.map((u) => (
                    <ProfileCard
                        key={u.id}
                        {...u}
                        isFollowing={following.has(u.id)}
                        onFollow={() => toggleFollow(u.id)}
                    />
                ))}
            </div>
        </>
    );
};

export default App_ProfileCard;
