import { firestore, storage } from '../firebase/clientApp';
import {
  collection,
  doc,
  getDoc,
  getDocs,
  limit,
  query,
  QueryConstraint,
  Timestamp,
  where,
} from 'firebase/firestore/lite';
import { getDownloadURL, ref } from 'firebase/storage';

import { BlogEntry } from '../src/types';

import { promises as fs } from 'fs';
import path from 'path';
import { PHASE_PRODUCTION_BUILD } from 'next/constants';

/**
 * blog
 */
const blogCollection = collection(firestore, 'blog');

export const getPosts = async (...queryConstraints: QueryConstraint[]) => {
  const blogQuery = query(
    blogCollection,
    // where('done', '==', false),
    ...queryConstraints
  );
  const querySnapshot = await getDocs(blogQuery);

  const images = await Promise.all(
    querySnapshot.docs.map((doc) =>
      getDownloadURL(ref(storage, doc.data().header_image))
    )
  );

  const posts = querySnapshot.docs.map((doc, i) => {
    return {
      id: doc.id,
      ...doc.data(),
      header_image: images[i],
      publish_date:
        doc.data().publish_date?.toDate().toLocaleDateString() ?? null,
      created_at: doc.data().created_at.toDate().toLocaleDateString(),
    };
  });

  return posts as BlogEntry[];
};

export const getPost = async (id: string) => {
  const docRef = doc(firestore, 'blog', id);
  const result = await getDoc(docRef);

  if (!result.exists()) {
    return null;
  }

  const post = {
    id: docRef.id,
    ...result.data(),
    header_image: await getDownloadURL(
      ref(storage, result.data().header_image)
    ),
    publish_date:
      result.data().publish_date?.toDate().toLocaleDateString() ?? null,
    created_at: result.data().created_at.toDate().toLocaleDateString(),
  };

  return post as BlogEntry;
};

export const apiPost = {
  list: async () => {
    // return PRODUCTS
    console.log('apiPost.list call');

    if (process.env.NEXT_PHASE === PHASE_PRODUCTION_BUILD) {
      try {
        const data = await fs.readFile(path.join(process.cwd(), 'posts.db'));
        const posts: BlogEntry[] = JSON.parse(data as unknown as string);
        return posts;
      } catch (error) {
        console.log('apiPost.list No cache file');
        return getPosts();
      }
    }

    return getPosts();
  },
  fetch: async (id: BlogEntry['id']) => {
    // return PRODUCTS.find((product) => product.id === id)
    console.log('apiPost fetch');
    return getPost(id);
  },
  cache: {
    getOne: async (id: string): Promise<BlogEntry | null | undefined> => {
      try {
        const data = await fs.readFile(path.join(process.cwd(), 'posts.db'));
        const posts: BlogEntry[] = JSON.parse(data as unknown as string);

        return posts.find((post) => post.id === id);
      } catch (error) {
        console.log('No cache file');
        return null;
      }
    },
    set: async (posts: BlogEntry[]) => {
      return fs.writeFile(
        path.join(process.cwd(), 'posts.db'),
        JSON.stringify(posts)
      );
    },
  },
};

/**
 * coffee
 */
const COFFEES = 'coffees';
const coffeesCollection = collection(firestore, COFFEES);

export const getCoffees = async (...queryConstraints: QueryConstraint[]) => {
  const q = query(coffeesCollection, ...queryConstraints);
  const querySnapshot = await getDocs(q);

  const images = await Promise.all(
    querySnapshot.docs.map((doc) =>
      getDownloadURL(ref(storage, doc.data().main_image))
    )
  );

  const coffees = querySnapshot.docs.map((doc, i) => {
    return {
      id: doc.id,
      ...doc.data(),
      main_image: images[i],
      roasting_date:
        doc.data().roasting_date?.toDate().toLocaleDateString() ?? null,
      created_at: doc.data().created_at.toDate().toLocaleDateString(),
    };
  });

  return coffees;
};

export const getCoffee = async (id: string) => {
  const docRef = doc(firestore, COFFEES, id);
  const result = await getDoc(docRef);

  if (!result.exists()) {
    return null;
  }

  const coffee = {
    id: docRef.id,
    ...result.data(),
    main_image: await getDownloadURL(ref(storage, result.data().main_image)),
    roasting_date:
      result.data().roasting_date?.toDate().toLocaleDateString() ?? null,
    created_at: result.data().created_at.toDate().toLocaleDateString(),
  };

  return coffee;
};

/**
 * user
 */
const COMPANIES = 'companies';
const companiesCollection = collection(firestore, COMPANIES);

// export const getUserCompany = async (id: string) => {
//   const docRef = doc(firestore, COMPANIES, id);
//   const result = await getDoc(docRef);

//   console.log('result.data() : ', result.data());

//   console.log('converter : ', coverter(result.data()));
// };
