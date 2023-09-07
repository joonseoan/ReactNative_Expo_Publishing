module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    // It the "react-native-reanimated/plugin" should be always last one
    plugins: ["react-native-reanimated/plugin"],
  };
};
