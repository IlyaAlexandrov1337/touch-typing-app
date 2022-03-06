import faker from '@faker-js/faker';

export const generate = (count: number) => new Array(count)
  .fill(undefined)
  .map(() => faker.random.word())
  .join(' ');
