"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Title, Text} from "@mantine/core";
import {useAuth} from "@frontend/hooks/useAuth";

export default function ProfilePage() {
    const {user} = useAuth();
    const router = useRouter();

    useEffect(() => {
        if (!user) {
            router.replace('/welcome');
        }
    }, [user, router]);

    if (!user) {
        return null;
    }

    return (
        <>
            <Title>Profile</Title>
            <Text>Name: {user.name}</Text>
        </>
    );
}
