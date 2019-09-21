/** @jsx jsx */

import React from 'react';
import { Header, Flex, Box, jsx } from 'theme-ui';

import Icon, { ICONS } from '../../components/Icon';
import Logo from '../../components/Logo';

export default () => (
  <Header>
    <Flex sx={{
      width: '100%',
      alignItems: 'center'
    }}>
      <Box sx={{ px: 'padding.small' }}>
        <Icon name={ ICONS.hamburger } />
      </Box>
      <Logo />
    </Flex>
  </Header>
);
