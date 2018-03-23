# React Login Form

[![Build Status](https://travis-ci.org/binhqd/react-form-login.svg?branch=master)](https://travis-ci.org/binhqd/react-form-login)
[![Coverage Status](https://coveralls.io/repos/binhqd/react-description-box/badge.svg?branch=master&time=2018.03)](https://coveralls.io/r/binhqd/react-description-box?branch=master)
[![npm version](https://img.shields.io/npm/v/react-form-login.svg?style=flat-square)](https://www.npmjs.com/package/react-form-login)
[![Downloads](http://img.shields.io/npm/dm/react-form-login.svg)](https://www.npmjs.com/package/react-form-login)

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
