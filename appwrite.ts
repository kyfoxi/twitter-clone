import { Client, Databases, Account } from 'appwrite';

export const client = new Client();
client.setEndpoint(process.env.NEXT_PUBLIC_ENDPOINT!).setProject(process.env.NEXT_PUBLIC_PROJECT!);

export const databases = new Databases(client);
export const account = new Account(client);

export type { Models } from 'appwrite';
export { ID } from 'appwrite';

console.log("CHECK appwrite.ts");

export const createUser = () => {
  account.create("kyfoxi", "kyfoxi@pinky.com", "kyfoxi123456")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}

export const loginAccount = () => {
  account.createEmailPasswordSession("kyfoxi@pinky.com", "kyfoxi123456")
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}
export const logoutAccount = () => {
  account.listSessions()
    .then(res => {
      console.log(res);


      // account.deleteSession("")
      account.deleteSessions()
        .then(res => {
          console.log(res);
        })
        .catch(err => console.log(err));

    })
    .catch(err => console.log(err));
}

export const getAccount = () => {
  account.get()
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}

export const listLogs = () => {
  account.listLogs([])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}
export const listIdentities = () => {
  account.listIdentities([])
    .then(res => {
      console.log(res);
    })
    .catch(err => console.log(err));
}
