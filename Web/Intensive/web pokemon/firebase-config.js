// Import the functions you need from the SDKs you need
import { initializeApp } from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-app.js';
import { getAnalytics } from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-analytics.js';
import {
  getFirestore,
  setDoc,
  doc,
} from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-firestore.js';
import { getAuth } from 'https://www.gstatic.com/firebasejs/12.12.1/firebase-auth.js';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyDAJqjt1wqTdz-VKhSOSl-vMYpep8tHqT4',
  authDomain: 'pikachu-app-be24a.firebaseapp.com',
  projectId: 'pikachu-app-be24a',
  storageBucket: 'pikachu-app-be24a.firebasestorage.app',
  messagingSenderId: '417384371485',
  appId: '1:417384371485:web:410b982590f211041b7df4',
  measurementId: 'G-EN0BM2MY35',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);
const db = getFirestore(app);

console.log('Firebase app initialized!');

// Export the initialized services for use in other modules
export { app, analytics, auth, db };

// Thực hiện thao tác ghi đơn giản để kiểm tra kết nối
async function testFirestoreConnection() {
  try {
    // Ghi một tài liệu mới vào một collection tên là "connection_test"
    // và một document tên là "first_test_document"
    await setDoc(doc(db, 'connection_test', 'first_test_document'), {
      message: 'Hello Firebase from Vanilla JS!',
      timestamp: new Date().toISOString(),
    });
    console.log('Thao tác ghi Firestore thành công! Ứng dụng đã kết nối.');
  } catch (error) {
    console.error('Lỗi khi kết nối hoặc ghi vào Firestore:', error);
  }
}

// Gọi hàm kiểm tra khi trang web tải xong
window.onload = testFirestoreConnection;
