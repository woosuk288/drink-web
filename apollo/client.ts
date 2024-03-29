import {
  ApolloClient,
  createHttpLink,
  InMemoryCache,
  makeVar,
} from '@apollo/client';
import { setContext } from '@apollo/client/link/context';
import { getAuth, User } from 'firebase/auth';

export enum UserRole {
  Manufacturer = 'Manufacturer',
  Owner = 'Owner',
  Company = 'Company',
  Individual = 'Individual',
  Admin = 'Admin',
}

export type CompanyUser = {
  company_id?: string;
} & User;

export type Role = keyof typeof UserRole | undefined | null;

export type ChoiceType = {
  caffein: string[];
  roasting: string[];
  acidity: string[];
};

// export const isLoggedInVar = makeVar<boolean>(false);
export const roleVar = makeVar<Role>(null);
export const userVar = makeVar<CompanyUser | null | undefined>(undefined);
export const notiBadgeVar = makeVar<boolean>(false);

export const choiceVar = makeVar<ChoiceType>({
  caffein: [],
  roasting: [],
  acidity: [],
});

const httpLink = createHttpLink({
  uri: process.env.NEXT_PUBLIC_HTTP_LINK,
});

const authLink = setContext(async (_, { headers }) => {
  const token = await getAuth().currentUser?.getIdToken();
  return {
    headers: {
      ...headers,
      authorization: token ? `Bearer ${token}` : '',
    },
  };
});

const client = new ApolloClient({
  // ssrMode: false,
  link: authLink.concat(httpLink),
  cache: new InMemoryCache({
    typePolicies: {
      Query: {
        fields: {
          // idToken: {
          //   read() {
          //     return isLoggedInVar();
          //   },
          // },
        },
      },
    },
  }),
});

export default client;
