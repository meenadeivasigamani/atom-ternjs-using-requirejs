const Extensible = require('./lib/extensible');

class Foo extends Extensible {

  methodB() {

    this.methodA();
  }
}
