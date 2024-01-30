
const ENV = {
basePath: process.env.NODE_ENV === "production" ? "" : process.env.REACT_APP_DEV_URL
};

export { ENV };
