import { doc, getDoc } from 'firebase/firestore';
import React, { useState } from 'react';
import { UserProfileContext } from '../context/UserProfileContext';
import { db } from '../firebase.setup';

export const UserProfileProvider: React.FC = ({ children }) => {
  const [photoURL, setPhotoURL] = useState<string>('');

  const getUser = async (uid: string) => {
    const docRef = doc(db, "users", uid),
      docSnap = await getDoc(docRef);

    docSnap.exists() && setPhotoURL(docSnap.data().photoURL);
  };

  const value = {
    photoURL: photoURL,
    getUser: getUser
  }

  return (
    <UserProfileContext.Provider value={value}>
      {children}
    </UserProfileContext.Provider>
  )
}
