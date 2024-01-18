const { PHASE_DEVELOPMENT_SERVER, PHASE_PRODUCTION_SERVER } = require('next/constants');

module.exports = () => {
  let config = {};

  if (PHASE_DEVELOPMENT_SERVER) {
    config.env = {
      mongo_username: 'DEV_DB_USERNAME',
      mongo_pw: 'DEV_DB_PASSWORD',
      mongo_cluster: 'DEV_DB_CLUSTER',
      mongo_12_db: 'DEV_DB_NAME'
    };
    config.webpack = (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };

      return config;
    };
  } else if (PHASE_PRODUCTION_SERVER) {
    config.env = {
      mongo_username: 'PROD_DB_USERNAME',
      mongo_pw: 'PROD_DB_PASSWORD',
      mongo_cluster: 'PROD_DB_CLUSTER',
      mongo_12_db: 'PROD_DB_NAME'
    };
    config.webpack = (config) => {
      config.resolve.fallback = {
        ...config.resolve.fallback,
        fs: false
      };

      return config;
    };
  }

  return config;
};
