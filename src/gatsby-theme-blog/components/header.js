/** @jsx jsx */

import React from 'react';
import { Header, Flex, Box, jsx } from 'theme-ui';

import Icon, { ICONS } from '../../components/Icon';
import Logo from '../../components/Logo';

export default () => (
  <Header sx={{ py: 2 }}>
    <Flex sx={{
      width: '100%',
      alignItems: 'center',
    }}>
      <Icon sx={{ px: 2 }} name={ ICONS.hamburger } />
      <Logo sx={{ px: 2 }} />
    </Flex>
  </Header>
);
