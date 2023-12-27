# render-templates

Zero-dependency string template rendering.

## Installation

```sh
npm install render-templates
# or
yarn add render-templates
# or
pnpm add render-templates
```

## Example

```js
import { render } from 'render-templates';

const template = 'Logged in as {{user.name}} ({{user.email}}).';
const view = {
  user: {
    name: 'John Doe',
    email: 'john.doe@example.com'
  }
};

const result = render(template, view);
console.log(result);
// Logged in as John Doe (john.doe@example.com).
```
