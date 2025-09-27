"use client";

import Link from "next/link";
import {IconHome2, IconUser, IconLogin, IconDoorExit} from "@tabler/icons-react";
import {Group, NavLink, Button} from "@mantine/core";
import {useAuth} from "@frontend/hooks/useAuth";

export function Navbar() {
  const {user, logout} = useAuth();

  return (
    <Group>
      {user ? (
        <>
          <NavLink component={Link} href="/home" label="Home" leftSection={<IconHome2 size={16} />} />
          <NavLink component={Link} href="/profile" label="Profile" leftSection={<IconUser size={16} />} />
          <Button variant="subtle" onClick={logout}><IconDoorExit size={16} style={{marginRight: 8}}/>Logout</Button>
        </>
      ) : (
        <>
          <NavLink component={Link} href="/welcome" label="Welcome" leftSection={<IconLogin size={16} />} />
          <NavLink component={Link} href="/login" label="Login" leftSection={<IconLogin size={16} />} />
        </>
      )}
    </Group>
  );
}
