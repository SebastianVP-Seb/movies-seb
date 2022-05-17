export const getTranscriptionCodeErrorFirebase=({code})=>{
    //computarizando, y si no encientra el código
    return CODES_FIREBASE[code] || `El código ${code} es desconocido`;
};

const CODES_FIREBASE={
    'auth/email-already-exists': 'Este email ya se encuentra en uso',
    'auth/phone-number-already-exists': 'Otro usuario ya utiliza el phoneNumber proporcionado.',
    'auth/user-not-found': 'Usuario no encontrado',
    'auth/email-already-in-use': 'Este email ya se encuentra en uso',
    'auth/invalid-credential': 'Email o contraseña incorrectos',
    'auth/wrong-password': 'Email o contraseña incorrectos',
    'auth/popup-closed-by-user': 'Se cerró la ventana del inicio de sesión con Google'
};