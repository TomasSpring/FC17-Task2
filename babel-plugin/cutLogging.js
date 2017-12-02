export default function ({types: t }) {
  return {
    visitor: {
      ClassDeclaration: function (node, parent) {
        console.log("XXX");
      }
    }
  };
}