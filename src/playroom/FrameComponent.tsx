// import '../reset';
import React, { Fragment, ReactNode } from 'react';
import { guestTheme } from '../guestTheme.css';

import * as styles from '../Box/Backgrounds.css';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => (
  <Fragment>
    <div className={[styles.defaultLight, guestTheme].join(' ')}>
      {children}
    </div>
  </Fragment>
);
