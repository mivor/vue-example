import mockBears from './mock-bears';

function getBears() {
  return Promise.resolve(mockBears);
}

export default {
  getBears,
};
