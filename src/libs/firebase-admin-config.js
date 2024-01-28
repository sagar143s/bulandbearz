import { initializeApp, getApps, cert } from 'firebase-admin/app';

const firebaseAdminConfig = {
    credential: cert({
        projectId: "bullandbearz",
        clientEmail: "firebase-adminsdk-n1y17@bullandbearz.iam.gserviceaccount.com",
        privateKey: "-----BEGIN PRIVATE KEY-----\nMIIEvQIBADANBgkqhkiG9w0BAQEFAASCBKcwggSjAgEAAoIBAQCrw8zFiiY6ghZp\nBuHVMNlzjL+aNsb5u/L8pW4/a8YQ2iZZcn5mgTNzFPXordeqRD+izBMdYMAHMX+Y\nzlYpkST9Ikq/ChuxH164XlyB0J6qLtVm9VYc9hjwQ3JLvOVMd4DUqr7jZy0UhH9m\n2YAeQRQKbY9P0QRxk1XVvOgpVTsJWyGygWMNWZZRgkK+V6/1OQVjpridXkLXEr8/\n5NG9YAsAGlnGe/vDKtvrEZGFEwBf3ZX2WUuWKPxpWVl4T+164PoCQDxSd/4IbtEJ\nqBnMBXxg+Ol9Zqv18Icr69jMqpdPiKFAS1Z3CdV5y3Pniamdn2b1g8ZGQ39KE0NX\n3mjStv0RAgMBAAECggEAKmaRPApYWYUXZyHNycTfSQjrm3P+NlPRLdDgoENIh4xy\nfw4macNnIfeApMmVPXDPjK534X6qqJvtdZkp5+TujpZSgUpLf7PQvA5/I4SORlB9\nWYcilM+jZFwh8NRWfkPZx6XGrXggxrnWgVsbp1xFSDW3dOqSAD9wpuyVGu7xPeOb\njEqkVpK76eMLrMiD38JtWXXLHfWFpugz6ttFtLRGgtJ+PnEX+EcYjeOnYxnaNz8W\nYgqiVl+CHFqYakc2pC/i+p29EbIyUlCSSEpG9lbPpv2NxOWVxwetBPGDV1xcHM4V\nIZDeuiGP8TY2lau7uSuxgP5AA6VnTKvR/GzSfVTHCQKBgQDcSXanLvxKkmEsKRgN\nSnvG4+kd+Y/KZnt3VzEG5ecrS5S1iiaIM8qSIX3pvkEIzykfo18PGT/T44ifUMwb\nDAC5GWiygw0BV1BFJSeTR3FQdGRXB9lUiQqfkw4vUstlMyCfRw/ikxvT+60Gc/f1\n3Ze5a5PO6XM6OOg6LL+aJwzybwKBgQDHnIezltrV4UMd3V8FDlSZPD/LYa8U9q96\nf0vBujrTH6Jkg30hojCU52rfZtgV/j/Yckr20J84mh9D30zd3hQTCzNCS31Hf9xs\nrJJCl3nnaNe3ix1UMAQgrh/1u9SybMHbbpUrfues0n1f4FaHtqvjZIiOe6XYvCz8\n0mYAKlzIfwKBgQCohSrYSwGGquTbu7RCtrBqPwCfhcOSu0PI0FMZS9fFL1TcbIt9\ntuFJWYXRw1JNQu3a3khibJZ/qpliB5WdO1lyQRXvOoJAfGNUAlB8QzNUsTXxvnds\nTEpsOTuoyFYBXVOfheWJF7E6QlbjkOQomxTvLHUu3TjhWZeOqZ0KeMVW0QKBgBKT\ng6F38Yej/g4CcvxSeBcGn107CwMlbfE1dYRi42SQdhlqjzOZF3JUEwMVXBi335My\nF73ebmLjHPPBDTM8npujGDMcOV11DbtjV/0wgZzCigi/vov+J/QuoDTLNSEhs+zK\n3sD8f2z67cYFZ6gbnOV9jqPL6ARChuFEZ0+uoZHbAoGABQspNbtZTaqcks3lc23j\nefnloqKXxfbYvszzUwWNap0iiSAwIQG6xqN7gzpsvI0V9ep7b0kg9K+0QuvMJqsY\nbsCarD7vvimNNsa+T/icrClZYoBw8un1oM+9/FFbBD9i1grWNAbqZS8o6P6UER4c\nurthcGBohbz5Rig7yvhHQpg=\n-----END PRIVATE KEY-----\n"
      })
}

export function customInitApp() {
    if (getApps().length <= 0) {
        initializeApp(firebaseAdminConfig);
    }
}