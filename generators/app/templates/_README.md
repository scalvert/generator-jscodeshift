
<%= name %>
==============================================================================

<%= description %>

Installation
------------------------------------------------------------------------------

Install [`jscodeshift`](https://github.com/facebook/jscodeshift) to run the
codemod script:

```
npm install -g jscodeshift
```

Usage
------------------------------------------------------------------------------

```
jscodeshift -t https://rawgit.com/scalvert/<%= name %>/master/<%= name %>.js ./tests/
```
