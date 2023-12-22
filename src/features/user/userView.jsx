import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "./userSlice";

export const UserView = () => {
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchUsers());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h2>List Of Users</h2>
      {user.loading && <p>Loading.....</p>}
      {!user.loading && user.error && <p>Error: {user.error}</p>}
      {!user.loading && user.users.length && (
        <ul>
          {user?.users.map((item) => (
            <li key={item.id}>{item.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};
