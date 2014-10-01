# Ember-cli-reading-time
[![Build Status](https://travis-ci.org/borisrorsvort/ember-cli-reading-time.svg?branch=master)](https://travis-ci.org/borisrorsvort/ember-cli-reading-time)

This is a wip implementation for the nice reading-time ([Michael Lynch](https://github.com/michael-lynch/reading-time)) plugin to display estimated reading time a piece of text.

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

### Options


<ol>

<li>
readingTimeTarget: "id / class / element"
<br />A string that defines the ID, class or element that will store the estimated reading time (default: 'eta').
</li>

<li>wordCountTarget: "id / class / element"
<br />A string that defines the ID, class or element that will store the total word count (default: ''). 
</li>

<li>remotePath: "path"
<br />A string that indicates the path to the remote file (default: null).
</li>

<li>remoteTarget: "id / class / element"
<br />A string that defines the ID, class or element in the remote file that contains the text in which you want to estimate the reading time of (default: null).
</li>

<li>wordsPerMinute: integer
<br />An integer that defines the words per minute at which to calculate the estimated reading time (default: 270).
</li>

<li>round: boolean
<br />A boolean value that indicates whether or not the estimated reading time should be rounded to the closest minute (default: true).
</li>

<li>lang: "en / fr / de / es / nl"
<br />A two letter string that indicates the language to be used (default: "en").
</li>

<li>lessThanAMinuteString: string
<br />A string that changes the default "Less than a minute" copy (default: '').
</li>

<li>prependTimeString: string
<br />A string that is prepended before the estimated reading time (default: '').
</li>

<li>prependWordString: string
<br />A string that is prepended before the total word count (default: '').
</li>

</ol>

## Contributing

As this is a wip, please post new issues, feature request or even make pull requests

### Running Tests

* `ember test`
* `ember test --server`
