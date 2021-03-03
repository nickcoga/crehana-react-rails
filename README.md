# crehana-react-rails

## Features

- Ruby on Rails 6.x
- React 16.x
- Webpack 4.x
- Babel 7.x
- ESLint support
- Prettier support
- SASS and StyleLint support
- Postgres compatibility
- Using Rails default gems and NPM packages only

## Install

It's recommended to use Ruby 2.7.1 and NodeJS 12.x.

```sh
# install bundler if not available
gem install bundler

# install gem dependencies
bundle install

# install npm dependencies
npm install

# create the postgres databases
# update config/database.yml details if needed
rake db:create

# generate assets for development
npm run webpack

# start server
rails s
```

## Webpack scripts

`npm run webpack`  
Builds the assets for development mode.

`npm run webpack:watch`  
Builds the assets for development mode, and rebuilds on every detected change.


