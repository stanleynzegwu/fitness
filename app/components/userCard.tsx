import { DefaultSession } from "next-auth";

const UserCard = ({ user }: { user: DefaultSession["user"] }) => {
  return (
    <div>
      <div>
        <p>current loggedin user</p>
        <h5>{user?.name}</h5>
        <p>{user?.email}</p>
      </div>
    </div>
  );
};

export default UserCard;
