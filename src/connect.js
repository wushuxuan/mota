const Observer = require('mokit/src/observer');

function trigger() {
  this.setState({ _model_: this.model });
}

function createRender(proto, model) {
  const initailRender = proto.render;
  return function () {
    if (!this._run_) {
      if (model instanceof Function) {
        model = new model();
        this._isNewModelInstance_ = true;
      } else {
        this._isNewModelInstance_ = false;
      }
      delete proto.model;
      Object.defineProperty(proto, 'model', {
        enumerable: false,
        get() { return model; }
      });
      const observer = new Observer(model);
      this._run_ = observer.run(initailRender, trigger, this);
    }
    return this._run_.run();
  };
}

function createUnmount(proto) {
  const initailUnmount = proto.componentWillUnmount;
  return function () {
    let result = null;
    if (initailUnmount) {
      result = initailUnmount.call(this);
    }
    const observer = this.model._observer_;
    if (this._run_) {
      observer.stop(this._run_);
      this._run_ = null;
    }
    if (this._isNewModelInstance_) {
      observer.clearReference();
    }
    return result;
  };
}

module.exports = function connect(model, component) {
  const proto = component.prototype;
  proto.render = createRender(proto, model);
  proto.componentWillUnmount = createUnmount(proto);
  return component;
}