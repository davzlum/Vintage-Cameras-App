import returnProductSection from './returnProductSection';

const scenarios = [
  {
    section: 'cameras',
    array: {
      cameras: 'hola',
    },
    result: 'hola',
  },
  {
    section: 'lenses',
    array: {
      lenses: 'hola',
    },
    result: 'hola',
  },
  {
    section: 'films',
    array: {
      films: 'hola',
    },
    result: 'hola',
  },
  {
    section: 'nada',
    array: {
      films: 'hola',
    },
    result: false,
  }];

scenarios.forEach((scenario) => describe('', () => {
  test('', () => {
    const result = returnProductSection(scenario.section, scenario.array);
    expect(result).toEqual(scenario.result);
  });
}));
