import { Authenticator } from '@aws-amplify/ui-react';
import { AmplifyProvider } from '@aws-amplify/ui-react';
import '@aws-amplify/ui-react/styles.css';

import styles from '../styles/Home.module.css'
import {configureAmplify} from '../src/lib/amplify/awsConfig';
import Header from '../src/components/Header';
import { amplifyTheme } from '../styles/theme/amplify.theme'

configureAmplify()

export default function Home() {
  return (
    <AmplifyProvider theme={amplifyTheme}>
      <div className={styles.container}>
        <Header />
        <div className={styles.main}>
          <Authenticator hideSignUp={true}>
            {({ signOut, user }) => (
              <main>
                <h1>Hello {user.username}</h1>
                <button onClick={signOut}>Sign out</button>
              </main>
            )}
          </Authenticator>
        </div>
      </div>
    </AmplifyProvider>
  );
}
