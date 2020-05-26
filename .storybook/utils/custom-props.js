import props from '!raw-loader!sass-loader!@/assets/scss/_root-vars.scss';

const propStrings = props.match(/--.*;/gim);

let properties = {
  color: [],
  'font-size': [],
  spacing: []
};

console.log(propStrings)

propStrings.forEach(s => {
  const [ k, v ] = s.split(/:\s{0,}/);

  console.log(k, v);

  const propertiesKeys = Object.keys(properties);

  if (k) {
    const propK = propertiesKeys.find(pk => {
      return k.indexOf(`--${pk}`) === 0;
    });

    if (propK) {
      properties[propK].push({
        key: k,
        value: v.replace(/;$/, '')
      })
    }
  }
});

console.log(properties)

export default properties;
