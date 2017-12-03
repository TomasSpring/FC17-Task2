export default function ({ Plugin, types: t }) {
  return new Plugin("foo", {
     visitor  : {
            CallExpression(path) {
                var loggers =  [{pattern: 'console'}];
                
            }
        }
  });
};