import {dummy} from '@foo/core';
// @ts-ignore
import styles from './App.module.scss';

import {AppRouter} from './router/AppRouter';

function App() {
  console.log(dummy);

  return (
    <div className={styles.App}>
      <header className={styles.header}>DOCUMENT VIEWER</header>
      {<AppRouter />}
    </div>
  );
}

export default App;
