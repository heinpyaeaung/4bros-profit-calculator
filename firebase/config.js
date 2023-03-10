const admin = require('firebase-admin');
admin.initializeApp({    
    credential: admin.credential.cert(
        {
            "type": "service_account",
            "project_id": process.env.FIREBASE_PROJECT_ID,
            "private_key_id": process.env.FIREBASE_PRIVATE_KEY_ID,
            "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCU4hKrG9oI3BSi\npspQfVbqRP4mVbS8AysxHTZ5fnlUJUDdAR7tYH3V+dRmwwG4jcQerGBQ63ak8PLt\nQ761nY0hI3ra2CIyp6crXllBnl1t3WBLn8XTTI/bOxi7J6RLy4i6LNw4IMSPmvJE\nij/sdTHUChGSCYp6U5eoEFkt6uCiiavK2Q/RgYTlXak0RwXhaB6hT9ABLhmyZgXP\nDptCDsWDuifs1fOHAgO1Z/AJVEywjea15QYH8F/IjUQFc+LIsoEdVpv/9/DgMYLS\nieB2ZlVQbqHEkSi9r76+JQ6C4HUbMJUi9MuPdPBcK01E0/OfjZW/Dkp6IHyAOwtl\nQjFRlM4pAgMBAAECggEAFanPjZY/44oidohOZ+fU/cGMOYe/BJxxbHQTuRnuDZBe\nH8pJ9cBUjw4LGejGF1SJdO0gFqYsXVOyBVQWK9cA8hF3juBkGXrLmEPiOOoSLipI\nGLjm0BgT1pKCxri970luW6irYn9iGoMxPUfghUeIOJI+fEFnJOWE6691SnkitoOY\n6xX/veoc+tlG9Ekj2u3lrh2qROdhZopwBlkQ7c+CND3Jq6KnccVNYyjPsINsiwGV\nsAUq1wwjgAcJmQKWSJEQujogKWFQSDeTjKal3dgxCgrnZBFwK15iDPg6C9eTihGV\nolPJ5FdhygjZP1uOJOEX5YiHA4Nf/J1/7LjTAfbVAQKBgQDD3cZKi6ik7HB0hh3i\nSEJVPcR6nGssXkyPzgFcrLBFx9g5OeHT/qKU2dWWe7sC0oPZSIJjG7c7ZBJB4r9Q\n+HlAq2iZyD88B1ar2TG0YTnDu3Gzlx80tF0F3llsUI/MUOvZCc//fLYTyq3nFhT2\nQTdZnhlWO1slqbDD0lJBnUG5ewKBgQDCl6A5kgn6eFQ+n/vR4NUExWMpgza7IRja\n7DCzOyfyv1GqlI496Rq7FkA7qksxbR+CpVzCz0HhDyaP4RbzcmOGlbgJ2udEDefW\n3ErKB3sz4mmQI1QzsU7s+NygXoNcSiGFcV++ih7paovqQfIrvwBqVxD3W7M0edRA\nbVVQDx7rqwKBgGZuu18M/tuRk5Y89a/7nkU6EmEVIK+JeXzTfb7bySwVQa1b6hCW\nYKx758nVV444Th/6XcY7Hm5+/VVbojZUXAVIH2IdaYSZSeiBpA7zseP9SY9kfztv\nAB8rk5Sj5TAzOcS97vtsW0SqgJwT3k6S+MFzf0irrhVaU0l12vLZrR+1AoGAH+gw\n03/ItxMn7STaa62MAD5FZjcnsENbCfqUea8He9w3DdtR/4DLa0XYvm/L6IzWD9wB\ne8f0K20Ki6kC1GQ7QYQnKyaDqTsGesqgUMQtRXKokIPaeKdoI58ivgEBVQ6qtHDE\nnD+VlfxseLrbdKTa8pTYKVcV6VLYpL/Ir1nrXgUCgYEAtsaxh9kE2Npz2QsL4ySo\nrMNjVjHdbe2rUeNgdfYXjxplFbKHwTaXZf02ThHTbLe67NygrwNxSsBk/WW7xNE0\nKuYLJki9g7xAwlw7k4Aoy8WAl4qk/PoJj5KA454x9bPZ6J8ESvstolsssr4EBn6l\n/sqnke0jeKlvWhEC5J8i9dI=\n-----END PRIVATE KEY-----\n",
            "client_email": "firebase-adminsdk-faepi@bros-69e27.iam.gserviceaccount.com",
            "client_id": process.env.FIREBASE_CLIENT_ID,
            "auth_uri": "https://accounts.google.com/o/oauth2/auth",
            "token_uri": "https://oauth2.googleapis.com/token",
            "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
            "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-faepi%40bros-69e27.iam.gserviceaccount.com"
        }
    )
});
const db = admin.firestore();
module.exports = db;