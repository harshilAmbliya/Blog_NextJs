import { Session } from 'next-auth';

declare module 'next-auth' {
    interface Session {
        user: {
            id: string;
            name: string | null | undefined;
            email: string;
            image: string | null | undefined;
            // Add any other custom properties you need
        };
    }
}
