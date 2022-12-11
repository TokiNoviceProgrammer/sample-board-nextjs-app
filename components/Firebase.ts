import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_APIKEY,
  authDomain: 'sample-board-app.firebaseapp.com',
  projectId: 'sample-board-app',
  storageBucket: 'sample-board-app.appspot.com',
  messagingSenderId: '849385797341',
  appId: '1:849385797341:web:243c481302bda8b47ecd34',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
