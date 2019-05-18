import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  height: 50px;
  border-bottom: 1px solid #ddd;

  &:last-child {
    border-bottom: none;
  }
`;
