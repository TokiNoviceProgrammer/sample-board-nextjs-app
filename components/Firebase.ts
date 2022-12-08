import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'

const firebaseConfig = {
  apiKey: 'AIzaSyCBVLL00EDwXm94MDHvrK-TWmLCwzjv3aw',
  authDomain: 'sample-next-js-app.firebaseapp.com',
  projectId: 'sample-next-js-app',
  storageBucket: 'sample-next-js-app.appspot.com',
  messagingSenderId: '503645834695',
  appId: '1:503645834695:web:65b70abc280833312e1de2',
}

const app = initializeApp(firebaseConfig)
const db = getFirestore(app)

export default db
