"use client";
import { log } from "console";
import { memo, useEffect, useState } from "react";

interface IUser {
  id: number;
  fname: string;
  lname: string | null;
  address: string | null;
  email: string;
  isActive: boolean;
  role: string;
  updatedAt: string;
  createdAt: string;
}

const Profile = () => {
  const [user, setUser] = useState<IUser | null>(null);
  const [loading, setLoading] = useState(true);
  console.log(user);
  

  useEffect(() => {
    fetch("/api/auth/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        setUser(data.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return <div className="h-[70vh] flex justify-center items-center">
      <div className="loader"></div>;
      </div>
  }
  return (
    <section className="container">
      <div>
        <p>{user?.fname}</p>
        <p>{user?.lname}</p>
        <p>{user?.address}</p>
        <p>{user?.email}</p>
        <p>{user?.role}</p>

      </div>
    </section>
  );
};

export default memo(Profile);
