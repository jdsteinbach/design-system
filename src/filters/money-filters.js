const USDLocale = ['en-US', { style: 'currency', currency: 'USD' }];

const fromCents = cents => (cents / 100).toLocaleString(...USDLocale);

const salary = s => s.toLocaleString(...USDLocale);

export { fromCents, salary };
