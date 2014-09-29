# Ember-cli-reading-time
[![Build Status](https://travis-ci.org/borisrorsvort/ember-cli-reading-time.svg?branch=master)](https://travis-ci.org/borisrorsvort/ember-cli-reading-time)

This is a wip implementation for the nice reading-time @michael-lynch plugin to display estimated reading time a piece of text.

## Installation

### Run

* `npm install --save-dev 'ember-cli-reading-time'`
* `ember generate ember-cli-reading-time`

### Add in your handlebar template

```
<article>
{{reading-time textTarget='article'}}
</article>
```

## Contributing

As this is a wip, please post new issues, feature request or even make pull requests

### Running Tests

* `ember test`
* `ember test --server`
