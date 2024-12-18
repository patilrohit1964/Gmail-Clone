<div style="margin:10px 8px;">
    <img src="./public/gmail sc/Screenshot 2024-12-18 143723.png"/>
</div>
<hr/>
<div style="margin:10px 8px;">
    <img src="./public/gmail sc/Screenshot 2024-12-18 143835.png"/>
</div>
<hr/>
<div style="margin:10px 8px;">
    <img src="public/gmail sc/Screenshot 2024-12-18 143900.png"/>
</div>

<hr/>

<div style="margin:12px 0px">
    <h2>Overview</h2>
    <p>TGmail Clone is a web-based email application that mimics the core functionalities of Google's Gmail. This project demonstrates a comphensive implementation of modern web technologies to create a user-friendly, responsive, and functional email client. It includes features such as sending and receiving emails, organizing messages, and user authentication.</p>
</div>
<hr/>
<div>
    <h2>Features</h2>
    <ul>
        <li><strong>User Authentication:</strong>  Secure login and registration system using Firebase Authentication.</li>
        <li><strong>Compose Emails:</strong>  Create and send emails with a rich-text editor.</li>
        <li><strong>Inbox Management:</strong> View and manage emails in the inbox.</li>
        <li><strong>Sent Items:</strong>  Keep track of sent emails.</li>
        <li><strong>Search Functionality: </strong> Accessible on both desktop and mobile devices.</li>
    </ul>
</div>
<hr/>
<div>
    <h2>Technologies Used</h2>
    <ul>
        <li><strong>Frontend:</strong> React.js with Redux/Redux-Toolkit API for state management</li>
        <li><strong>Backend:</strong> Firebase Cloud Firestore for real-time database and storage</li>
        <li><strong>Authentication:</strong> Firebase Authentication for secure user sessions</li>
        <li><strong>Styling:</strong> [Tailwind CSS, Css]</li>
    </ul>
</div>
<hr/>
<div>
    <h2>Installation:</h2>
    <ul>
        <li>Node.js installed on your machine</li>
        <li>Firebase Account Setup</li>
    </ul>
    <h2>Steps</h2>
    <ol>
        <li><h4>Clone the Repository:</h4></li>
        <p>git clone: https://github.com/patilrohit1964/Gmail-Clone.git</p>
        <li><h4>Navigate to the Project Directory:</h4></li>
        <p>cd client</p>
        <li><h4>Install Dependencies:</h4></li>
        <p>npm install</p>
        <li><h4>Start the Development Server:</h4></li>
        <p>npm run dev</p>
        <li><h4>Access the Application:</h4></li>
        <p>Open your browser and navigate to http://localhost:5173</p>
    </ol>
</div>

<hr/>
<div>
   <h2>Usage</h2>
   <ol>
    <li>Register a new account or log in with an existing one using Firebase Authentication.</li>
    <li>Manage your inbox and sent items stored in Firebase Firestore.</li>
    <li>View and manage your inbox</li>
    <li>Use the search bar to find specific emails.</li>
   </ol>
</div>

<div>
    <h2>Firebase Configuration</h2>
    <p>Ensure that your firebase file is set up correctly in the src/firebase.js:</p>
    <p>
        import { initializeApp } from "firebase/app";
        import { getAuth } from "firebase/auth";
        import { getFirestore } from "firebase/firestore";

        const firebaseConfig = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
        };
        const app = initializeApp(firebaseConfig);
        export const auth = getAuth(app);
        export const db = getFirestore(app);
    </p>

</div>

<div>
    <h2>Future Enhancements</h2>
    <ul>
        <li>Add support for attachments in emails using Firebase Storage.</li>
        <li>Implement email threading.</li>
        <li>Introduce notifications for incoming emails.</li>
        <li>Add advanced filtering and sorting options.</li>
    </ul>
</div>

<div>
    <h2>Contributing</h2>
    <p>Contributions are welcome! Please feel free to submit a pull request or open an issue for any improvements or bug fixes.</p>
</div>

<div>
    <h2>Contact</h2>
    <ul>
        <li>Email: patilrohit1964@gmail.com</li>
        <li>LinkedIn: https://www.linkedin.com/in/patilrohit1964/</li>
        <li>GitHub: https://github.com/patilrohit1964</li>
    </ul>
</div>
