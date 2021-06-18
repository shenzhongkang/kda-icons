import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Icon, IconProps, IconNameType } from '../src';
import styled from 'styled-components';

const IconNameArray: IconNameType[] = ['account_circle'];

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, 112px);
  justify-content: space-between;
  align-content: flex-start;
  gap: 24px 16px;
  > div {
    height: 128px;
    width: 112px;
    border-radius: 8px;
    cursor: pointer;
    display: inline-flex;
    flex-direction: column;
    justify-content: space-evenly;
    align-items: center;
    &:hover {
      background-color: rgba(20, 20, 20, 0.05);
    }
    > .icon__name {
      color: gray;
      font-size: 14px;
    }
    > .a-Icon {
      color: #4c5a71;
    }
  }
`;

const meta: Meta = {
  title: 'Icons',
  component: Icon,
};

export default meta;

export const FilledIcons = () => (
  <Container>
    {IconNameArray.map(icon => (
      <div>
        <Icon size="2em" name={icon} color="#4c5a71" />
        <span className="icon__name">{icon.split('_').join(' ')}</span>
      </div>
    ))}
  </Container>
);
