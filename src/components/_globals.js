import Vue from 'vue';

const kebabCase = str => str
  // get all uppercase letters that follow lowercase ones
  .replace(/([a-z])([A-Z])/g, `$1-$2`)
  // replace spaces and underscores
  .replace(/[\s_]+/g, '-')
  // convert to lower case
  .toLowerCase();

const requireComponent = require.context(
  '.',
  true,
  // Only get ui/* & animation/*
  /\.\/(animation|ui)\/.*.vue/
);

requireComponent.keys().forEach(fileName => {
  const componentConfig = requireComponent(fileName);

  const componentName = kebabCase(
    fileName
      .split('/')
      .pop()
      .replace(/\.\w+$/, '')
  );

  Vue.component(
    componentName,
    componentConfig.default || componentConfig
  );
});
