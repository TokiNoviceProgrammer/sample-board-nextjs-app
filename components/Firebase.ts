import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: 'sample-board-nextjs-app.firebaseapp.com',
  projectId: 'sample-board-nextjs-app',
  storageBucket: 'sample-board-nextjs-app.appspot.com',
  messagingSenderId: '994951739434',
  appId: '1:994951739434:web:41cb056919234f6b7c2b53',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
