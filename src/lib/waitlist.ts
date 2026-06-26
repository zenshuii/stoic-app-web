import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from './firebase'

const getWaitlistDocumentId = (email: string) =>
  email.includes('/') ? `encoded_${encodeURIComponent(email)}` : email

export const submitWaitlistEmail = async (email: string) => {
  const lowerEmail = email.trim().toLowerCase()
  const documentId = getWaitlistDocumentId(lowerEmail)

  await setDoc(doc(db, 'waitlistSignups', documentId), {
    email: lowerEmail,
    createdAt: serverTimestamp(),
    source: 'landing-page',
  })
}
