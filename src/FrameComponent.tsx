// import '../../reset';
import React, { useEffect, Fragment, ReactNode } from 'react';
import { manageTheme } from './vars.css';
import * as styles from './Box/Backgrounds.css';

interface Props {
  children: ReactNode;
}

export default ({ children }: Props) => (
  <Fragment>
    <div
      className={[styles.defaultLight, manageTheme].join(' ')}
      // style={{ flex: 1 }}
      id="shawn"
    >
      Foo
      {children}
    </div>
  </Fragment>
);
