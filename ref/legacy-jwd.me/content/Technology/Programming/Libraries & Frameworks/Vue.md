Vue is a front-end [[JavaScript]] framework created by Evan Yu. 

Vue is intuitive and easy to use.

## Vue Routing
To make vue-router reload the page when navigating to a page with the same base route we need to set the key to $route.fullPath in the router-view component.

For example navigating from /product/11 to /product/12

```vue
<router-view :key="$route.fullPath" />
```

 Alternatively you can look at  using beforeRouteUpdate or watch $route for changes.