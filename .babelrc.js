const plugins = [
  [
    require.resolve('babel-plugin-module-resolver'),
    {
      root: ["."],
      alias: {
        "~": "./"
      }
    }

  ]

];
