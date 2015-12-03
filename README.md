# rails-webpack-react-redux-boilerplate

This a boilerplate for SPA with Rails application as its backend.
Asset pipeline is replaced with Webpack.

## Tools this project use
#### Backend
```
gem 'figaro'
gem 'annotate', '~> 2.6.8'
gem 'awesome_print', :require => 'ap'
gem 'capistrano', '~> 3.4.0'
gem 'capistrano-rvm'
gem 'capistrano-bundler', '~> 1.1.2'
gem 'capistrano-rails', '~> 1.1'
gem 'capistrano3-puma', '~> 1.2.1'
```

#### Frontend
```
"dependencies": {
  "history": "^1.13.1",
  "react": "^0.14.3",
  "react-dom": "^0.14.3",
  "react-redux": "^4.0.0",
  "react-router": "^1.0.0",
  "redux": "^3.0.4",
  "redux-logger": "^2.0.4",
  "redux-thunk": "^1.0.0"
},
"devDependencies": {
  "assets-webpack-plugin": "^3.2.0",
  "babel-core": "^5.8.24",
  "babel-eslint": "^4.1.3",
  "babel-loader": "^5.3.2",
  "babel-plugin-react-transform": "^1.1.1",
  "css-loader": "^0.21.0",
  "eslint": "^1.7.3",
  "eslint-config-airbnb": "^0.1.0",
  "eslint-plugin-react": "^3.6.3",
  "expose-loader": "^0.7.0",
  "express": "^4.13.3",
  "file-loader": "^0.8.4",
  "react-transform-catch-errors": "^1.0.0",
  "react-transform-hmr": "^1.0.1",
  "redbox-react": "^1.1.1",
  "style-loader": "^0.13.0",
  "webpack": "^1.12.2",
  "webpack-dev-middleware": "^1.2.0",
  "webpack-hot-middleware": "^2.4.1"
}
```

## Usage

#### Requirements
You must have Ruby and Node installed before using this step.

#### Development

Execute:

    $ bundle install
    $ npm install
    $ gem install foreman

Copy and add your configuration to `config/database.yml`, `config/secrets.yml` and `application.yml`

Run `foreman start` to start up the application.
