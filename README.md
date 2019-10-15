# app

## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

```
cnpm i -S vant 
npm install --save amfe-flexible

/*main.js*/
import 'amfe-flexible/index.js'  // rem h5 适配
import Vant from 'vant';
import 'vant/lib/index.css';

Vue.use(Vant);
```