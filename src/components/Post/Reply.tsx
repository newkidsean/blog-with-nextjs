import React from 'react';
import styled from 'styled-components';

const Reply = () => {
  return (
    <Container>
      <Name>sean</Name>
      <Text>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Pariatur,
        maiores delectus ab quis, vel doloribus neque nemo itaque, praesentium
        dicta consequuntur. Voluptas facere fugit earum illo aperiam iusto hic
        perspiciatis?
      </Text>
    </Container>
  );
};

export default Reply;
const Container = styled.div`
  margin: 2rem 0;
`;
const Name = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;
const Text = styled.div`
  font-size: 1.5rem;
  margin-top: 0.5rem;
  max-width: 30vw;
`;
