import { DateMinusSixHoursPipe } from './date-minus-six-hours.pipe';

describe('DateMinusSixHoursPipe', () => {
  it('create an instance', () => {
    const pipe = new DateMinusSixHoursPipe();
    expect(pipe).toBeTruthy();
  });
});
