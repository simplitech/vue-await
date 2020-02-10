# Vue-Await

Easy-to-use loading indicator

# Install
```
npm i @simpli/vue-await
```

## Import
```typescript
import Vue from 'vue'
import VueAwait from '@simpli/vue-await'

Vue.use(VueAwait)
```
On your Scss:
```scss
@import "~@simpli/vue-await/scss/await";
```

## Basic Usage
```html
<await name="myRequestName">
  To be shown after loading
</await>
```
On a Vue instance:
```typescript
this.$await.run('myRequestName', async () => {
  // Make the request here
})
```
Outside a Vue instance:
```typescript
import {$await} from '@simpli/vue-await'

$await.run('myRequestName', async () => {
  // Make the request here
})
```

## Other props and slots
```html
<await
  name="myRequestName"
  effect="vueTransitionCssClass"
  spinner="vueComponentNameToBeRenderedOnLoading"
  :spinnerColor="colorThatWillBePassedAsPropToTheComponent"
  :spinnerPadding="paddingForTheLoadingElement"
  :spinnerScale="zoomForTheLoadingElement"
  @loading="callbackWhenLoading"
  @error="callbackWhenErrorIsThrown"
>
  The content to be shown after loading
  <template slot="error">
    The content to be shown if a error is thrown
  </template>
</await>
```

## Define the loading indicator with a slot
```html
<await
  name="myRequestName"
>
  The content to be shown after loading
  <template slot="loading">
    The content to be shown when loading
  </template>
</await>
```

## Configure the Default behaviour
```typescript
$await.defaultTransition = 'vueTransitionCssClass'
$await.defaultSpinner = 'vueComponentNameToBeRenderedOnLoading'
$await.defaultSpinnerColor = '#42b983'
$await.defaultSpinnerPadding = '10px'
$await.defaultSpinnerScale = 1
```

## $await Methods
```typescript
// gets the component to be shown when 'myRequestName' is loading
const spinnerOfMyRequest = $await.loader['myRequestName']

// define the component to be shown when 'myRequestName' is loading
$await.addLoader('myRequestName', MyComponentClass)

// returns a boolean indicating if 'myRequestName' is loading
const isLoading = $await.inAction('myRequestName')

// initialize the loading passing the request name
$await.init('myRequestName')

// ends the loading of 'myRequestName'
$await.done('myRequestName')

// indicate an error on 'myRequestName'
$await.error('myRequestName')

// initialize the loading, process the request on the callback and then ends the loading
$await.run('myRequestName', async () => {
  // your request goes here
})

```

## Using with [Serialized-Request](https://github.com/simplitech/serialized-request)
```typescript
RequestListener.onRequestStart(reqName => $await.init(reqName))
RequestListener.onRequestEnd(reqName => $await.done(reqName))
```
