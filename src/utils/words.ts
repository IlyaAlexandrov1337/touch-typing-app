import faker from '@faker-js/faker';

export const generate = (count = 10) => {
    return new Array(count)
        .fill(undefined)
        .map(_ => faker.random.word())
        .join(' ');
};