const admin = require('firebase-admin');
const serviceAccount = require('./gvu-medical-records-firebase-adminsdk-fbsvc-d8166f0995.json');

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

setAdminClaim('wurldadmin@school.com');