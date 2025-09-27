"use client";

import {useState} from "react";
import {useRouter} from "next/navigation";
import {TextInput, Button, Paper, Title} from "@mantine/core";
import {useAuth} from "@frontend/hooks/useAuth";

export default function LoginPage() {
    const [name, setName] = useState("");
    const {login, user} = useAuth();
    const router = useRouter();

    if (user) {
        router.replace("/home");
        return null;
    }

    const submit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!name) {
            return;
        }
        login(name);
        router.push("/home");
    };

    return (
        <Paper p="md" style={{maxWidth: 420, margin: '2rem auto'}}>
            <Title order={2}>Login</Title>
            <form onSubmit={submit}>
                <TextInput label="Name" value={name} onChange={(e) => setName(e.target.value)} required />
                <Button type="submit" style={{marginTop: 12}}>Login</Button>
            </form>
        </Paper>
    );
}
