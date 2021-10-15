import React from 'react';
import {View, Image, TouchableOpacity} from 'react-native';
import {UserAvatar} from '../UserAvatar';
import styled from 'styled-components/native';
import {useNavigation, useRoute} from '@react-navigation/native';

import {RouteNames} from '../../Constants';

import HamburgerMenuIcon from '../../assets/images/burgerMenuIcon.png';
import BackButtonIcon from '../../assets/images/back.png';

const HeaderWrapper = styled(View)`
  background-color: ${({theme}) => theme.colors.bg.primary};
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding-horizontal: ${({theme}) => theme.spaces[1]};
  padding-bottom: ${({theme}) => theme.spaces[1]};
  height: 45px;
`;

const ScreenControlWrapper = styled(TouchableOpacity)`
  align-self: center;
`;

export const Header: React.FC = ({children}) => {
  const navigation = useNavigation();
  const route = useRoute();

  return (
    <HeaderWrapper>
      {route.name === RouteNames.Home ? (
        <ScreenControlWrapper>
          <Image source={HamburgerMenuIcon} />
        </ScreenControlWrapper>
      ) : (
        <ScreenControlWrapper onPress={() => navigation.goBack()}>
          <Image source={BackButtonIcon} />
        </ScreenControlWrapper>
      )}
      {children}
      <UserAvatar />
    </HeaderWrapper>
  );
};
