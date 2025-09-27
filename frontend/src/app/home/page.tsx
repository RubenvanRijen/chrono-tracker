"use client";

import {useEffect} from "react";
import {useRouter} from "next/navigation";
import {Title, Text} from "@mantine/core";
import {useAuth} from "@frontend/hooks/useAuth";

export default function HomePage() {
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
            <Title>Home</Title>
            <Text>Welcome back, {user.name}</Text>
        </>
    );
}
