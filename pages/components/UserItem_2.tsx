import React, { memo } from "react";

type UserItemProps = {
  user: User;
  onButtonClick?: () => void;
};

function UserItem({ user, onButtonClick }: UserItemProps) {
  return (
    <div>
      <div>Name: {user.name}</div>
      <div>Email: {user.email}</div>
      <div>Username: {user.username}</div>
      <button type="button" onClick={onButtonClick}>
        Click-me
      </button>
    </div>
  );
}

export const MemoUserItem = memo(UserItem);

export default UserItem;
