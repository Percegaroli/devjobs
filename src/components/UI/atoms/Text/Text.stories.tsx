import React from 'react';
import { Colors } from '../../../../enum/Colors';
import Text from './index';

export const H1: React.VFC = () => (
  <Text
    color={Colors.PRIMARY_DARK}
    variant="h1"
    text="This is an H1 text"
  />
);

export const H2: React.VFC = () => (
  <Text
    color={Colors.PRIMARY_DARK}
    variant="h2"
    text="This is an H2 text"
  />
);

export const H3: React.VFC = () => (
  <Text
    color={Colors.PRIMARY_DARK}
    variant="h3"
    text="This is an H3 text"
  />
);

export const H4: React.VFC = () => (
  <Text
    color={Colors.PRIMARY_DARK}
    variant="h3"
    text="This is an H3 text"
  />
);

export const Body: React.VFC = () => (
  <Text
    color={Colors.PRIMARY_DARK}
    variant="body"
    text="This is an body text"
  />
);
