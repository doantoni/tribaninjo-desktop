import React from 'react';
import StyledTitle from './styles';

interface Props {
  title: string;
}

const Title = ({ title }: Props) => {
  return <StyledTitle>{title}</StyledTitle>;
};

export default Title;
