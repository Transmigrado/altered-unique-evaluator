import { QuerySnapshot, DocumentData  } from 'firebase/firestore';


export const snapshotToArray = <T>(snapshot: QuerySnapshot): T[] => {
  const response: T[] = [];

  snapshot.forEach((doc) => {
    response.push(snapshotToObject(doc));
  });
  return response;
}

export const snapshotToObject = <T>(doc: DocumentData): T => {
  return {
    ...doc.data(),
    uid: doc.id,
  } as T
} 