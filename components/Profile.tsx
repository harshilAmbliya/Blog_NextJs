"use client"

import {
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Button,
  Avatar,
} from "@material-tailwind/react";
import { signOut } from "next-auth/react";
import { useRouter } from "next/navigation";

export function Profile() {
    const router = useRouter()
    const handleLogout = () => {
        signOut({
          callbackUrl: "/login",
          redirect: false,
        });
        router.push("/login");
      };
  return (
    <Menu>
      <MenuHandler>
        <Avatar src="https://www.material-tailwind.com/img/face-2.jpg" alt="avatar" loading="lazy" />
      </MenuHandler>
      <MenuList>
        <MenuItem>Profile</MenuItem>
        <MenuItem>Settings</MenuItem>
        <MenuItem onClick={handleLogout}>Logout</MenuItem>
      </MenuList>
    </Menu>
  );
}
