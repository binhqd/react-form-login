### Usage
```javascript
<LoginForm
  username={
    {
      className: {'test'}
    }
  }
/>
```
The output will be
```react
<LoginForm
  username={
    {
      placeholder: 'Username',
      className: 'test'
    }
  }
  onSubmit={(username, password) => {
    console.log(username, password);
  }}
/>
```
