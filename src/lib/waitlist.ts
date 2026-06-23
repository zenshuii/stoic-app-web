import { doc, serverTimestamp, setDoc } from 'firebase/firestore'
import { db } from './firebase'

export const submitWaitlistEmail = async (email: string) => {
  const lowerEmail = email.trim().toLowerCase()

  await setDoc(doc(db, 'waitlistSignups', lowerEmail), {
    email: lowerEmail,
    createdAt: serverTimestamp(),
    source: 'landing-page',
  })
}
