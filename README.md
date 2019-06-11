# eslint-config-oneflow
This package provides oneflow's .eslintrc as an extensible shared config.

## Usage

We've created the following configuration and rule sets:

### eslint-config-oneflow

Our default export contains all of our ESLint rules.

1. `npm install --save-dev eslint-config-oneflow`
2. add `"extends": "oneflow"` to your .eslintrc

## Publishing

To publish a new version of this repo simply push a new release tag to the master branch on github:
```
git tag vX.Y.Z
git push --tags
```
Remember to manually bump the version in package.json and package-lock.json beforehand!
