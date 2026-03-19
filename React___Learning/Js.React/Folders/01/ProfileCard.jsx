import React from "react";

const ProfileCard = (props) => {
  return (
    <div className={`m-2 w-55 rounded-2xl border`}>
      <div className={`h-20 w-full rounded-t-2xl bg-sky-700`}></div>
      {props.isOnline ? (
        <span className="float-end  m-1 mx-2 rounded-full bg-green-500 px-1 text-sm">
          Online
        </span>
      ) : (
        <span className="float-end m-1 mx-2 rounded-full bg-red-500 px-1 text-sm">
          Offline
        </span>
      )}

      {props.isAdmin && (
        <span className="float-end m-1 mx-2 rounded-full bg-yellow-300 px-1 text-sm">
          Admin
        </span>
      )}

      <div className="pfp h-10 w-10 translate-x-2 -translate-y-4 rounded-full bg-black text-center text-2xl text-white">
        {props.pfp}
      </div>
      <div>
        <p className="px-2 font-mono font-bold">{props.name}</p>
        <p className="px-2 font-mono">{props.role}</p>
        <hr className="mx-auto my-2 w-1/2" />
        <div className="flex justify-around gap-2">
          <p className="flex flex-col text-center">
            <span>{props.followers}</span>
            <span>Followers</span>
          </p>
          <p className="flex flex-col text-center">
            <span>{props.following}</span>
            <span>Following</span>
          </p>
        </div>
        <hr className="mx-auto my-2 w-1/2" />
        <div className="flex justify-center py-2">
          <button onClick={props.onFollow} className={`btn flex border  ${props.isFollowing ? "bg-white text-black " : "bg-blue-500"
            } `}>
            {
              props.isFollowing ? "✓ Following" : "+ Follow "
            }
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
