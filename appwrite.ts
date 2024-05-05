import { Client, Databases, Account } from 'appwrite';

export const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_PROJECT!);

export const databases = new Databases(client);
export const account = new Account(client);

export { ID } from 'appwrite';