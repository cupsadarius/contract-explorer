export function actionCreator(type) {
  return (payload, path) => {
    let obj = {
      type
    };

    if (payload) {
      obj = Object.assign({}, obj, { payload });
    }

    if (path) {
      obj = Object.assign({}, obj, { path });
    }

    return obj;
  };
}

