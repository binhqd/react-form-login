# React Login Form
====================

Form component built with ReactJS that can be Customizable

## Quickstart
Install the module with:
```
npm install --save react-form-login
```
or
```
yarn add react-form-login
```

## Getting Started
Import `LoginForm` to your React Page Component
```js
import { LoginForm } from 'react-form-login';
```
## Usage
### 1. Simple use
```js
import { LoginForm } from 'react-form-login';

<LoginForm
  onSubmit={(username, password, isRemember) => {
    // Sending AJAX request ...
    console.log(username, password, isRemember);
  }}
/>
```
See more at [DOCS.md](./DOCS.md)

## Contributing
Contributions are welcome!

## License
Copyright (c) 2018 Binh Quan

Licensed under the MIT license.
