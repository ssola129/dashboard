# Spec

- Typescript
- React
- Storybook
- Styled-components
- React-icons > Material Design icons
- React-chartjs-2

# Install

## Step 1

### React + Typescript 설치 및 디렉터리 구성

```
$ npm init -y

$ npm install --save react react-dom
$ npm install --save @types/react @types/react-dom
$ npm install --save react-router react-router-dom
$ npm install --save @types/react-router @types/react-router-dom


$ npm install --save-dev typescript
$ npm typescript —init
```

### tsconfig.json 파일 수정

```
// tsconfig.json

“compilorOptions”: {
	“jsx”: “react”,
	...
}
```

## Step 2

### 디렉터리 구조 셋팅 및 파일 생성

1. 최상위 디렉터리 내부

   - index.html 파일 생성

```
// index.html

<!DOCTYPE html>
<html>
	<head>
		<meta charset=“UTF-8” />
    <title>Hello</title>
	</head>
	<body>
		<div id=“app”></div>
		<script src=“./dist/main.js”></script>
	</body>
</html>
```

2. src 디렉터리 생성

   - index.tsx 파일 생성

```
// src/index.tsx

import * as React from 'react';
import * as ReactDOM from 'react-dom';
import App from './components/App';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);
```

3. src/components 디렉터리 생성

   - 기능 컴포넌트 디렉터리(.tsx)

4. src/styles 디렉터리 생성

   - 스타일 컴포넌트 디렉터리([.style].ts)

5. src/components/App.tsx 파일 생성

```
import React from 'react';

function App() {
  return <div>index</div>;
}

export default App;
```

## Step 3

```
$ npm install --save-dev ts-loader webpack webpack-cli webpack-dev-server
$ npm install --save url-loader file-loader
$ npm install --save styled-components @types/styled-components
$ npm install --save-dev typescript-plugin-styled-components
```

1. webpack.config.js 파일 작성

```
const {
  resolve
} = require('path');

const createStyledComponentsTransformer = require('typescript-plugin-styled-components')
  .default;
const styledComponentsTransformer = createStyledComponentsTransformer();

module.exports = {
  mode: 'development',
  entry: './src/index.tsx',
  output: {
    filename: 'main.js',
    path: __dirname + '/dist',
  },
  devtool: 'source-map',
  devServer: {
    contentBase: './',
    publicPath: '/dist',
  },
  resolve: {
    modules: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules')],
    extensions: ['.ts', '.tsx', '.js'],
  },
  module: {
    rules: [{
        test: /\.tsx?$/,
        loader: 'ts-loader',
        options: {
          getCustomTransformers: () => ({
            before: [styledComponentsTransformer],
          }),
        },
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)$/,
        loader: 'url-loader',
        include: [/assets/],
        options: {
          limit: 10000,
        },
      },
      {
        test: /\.(ttf|eot|otf|woff2?)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'file-loader',
        include: [/assets/],
        query: {
          name: '[name].[ext]',
        },
      },
    ],
  },
};
```

2. package.json 파일 수정

```
{
  "scripts": {
    "start": "webpack-dev-server",
    "build": "npm run clean && webpack",
    "test": "echo \"Error: no test specified\" && exit 1",
    "clean": "rm -rf dist",
    "cleanCache": "rm -rf node_modules/.cache/hard-source/"
    ...
  },
  "resolutions": {
    "styled-components": "^5"
  }
  ...
}
```

## Step 4

```

```

## Step etc

- https://react-icons.github.io/react-icons/
- https://github.com/react-icons/react-icons
