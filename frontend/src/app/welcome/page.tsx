import Link from "next/link";
import {Button, Title, Text} from "@mantine/core";

export default function WelcomePage() {
    return (
        <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12, marginTop: 24}}>
            <Title>Welcome</Title>
            <Text>Welcome to Chrono Tracker. Please login to continue.</Text>
            <Button component={Link} href="/login">Login</Button>
        </div>
    );
}
