const admin = require('firebase-admin');

// Reference the service account key file
const serviceAccount = require('./gvu-medical-records-firebase-adminsdk.json');

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

async function setAdminClaim(email) {
  try {
    const user = await admin.auth().getUserByEmail(email);
    await admin.auth().setCustomUserClaims(user.uid, { role: 'admin' });
    console.log(`Admin role set for ${email}`);
  } catch (error) {
    console.error('Error setting custom claim:', error);
  }
}

// Replace with your admin email
setAdminClaim('admin@school.com');