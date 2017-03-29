chai.config.includeStack = false;
chai.config.truncateThreshold = 0;
var assert = chai.assert;


describe('LinkedList', function() {
    describe('add(value)', function() {
        beforeEach(function() {
            this.list = new LinkedList();
        });

        it('should add the value to the end of the list', function() {
            this.list.add(1);
            assert.deepEqual(this.list.items(), [1]);

            this.list.add(2);
            assert.deepEqual(this.list.items(), [1, 2]);

            this.list.add('javascript');
            assert.deepEqual(this.list.items(), [1, 2, 'javascript']);
        });

        it('should increment the length of the list', function() {
            this.list.add(1);
            assert.equal(this.list.length, 1);

            this.list.add(2);
            assert.equal(this.list.length, 2);

            this.list.add('javascript');
            assert.equal(this.list.length, 3);
        });
    });

    describe('remove(value)', function() {
        beforeEach(function() {
            this.list = new LinkedList();
            for (var i = 1; i <= 5; i++) {
                this.list.add(i);
            }
        });

        it('should remove the value from the list', function() {
            this.list.remove(1);
            assert.deepEqual(this.list.items(), [2, 3, 4, 5]);

            this.list.remove(5);
            assert.deepEqual(this.list.items(), [2, 3, 4]);

            this.list.remove(3);
            assert.deepEqual(this.list.items(), [2, 4]);
        });

        it('should decrement the length of the list', function() {
            this.list.remove(1);
            assert.equal(this.list.length, 4);

            this.list.remove(5);
            assert.equal(this.list.length, 3);

            this.list.remove(3);
            assert.equal(this.list.length, 2);
        });
    });

    describe('clear()', function() {
        beforeEach(function() {
            this.list = new LinkedList();
            for (var i = 1; i <= 5; i++) {
                this.list.add(i);
            }
        });

        it('should remove all values in the list', function() {
            this.list.clear();
            assert.deepEqual(this.list.items(), []);
        });

        it('should reset the length of the list', function() {
            this.list.clear();
            assert.equal(this.list.length, 0);
        });
    });

    describe('contains(value)', function() {
        beforeEach(function() {
            this.list = new LinkedList();
            for (var i = 1; i <= 5; i++) {
                this.list.add(i);
            }
        });

        it('should return true if the value is in the list', function() {
            assert.equal(this.list.contains(1), true);
            assert.equal(this.list.contains(5), true);
            assert.equal(this.list.contains(3), true);
        });

        it('should return false if the value is not in the list', function() {
            assert.equal(this.list.contains(6), false);
            assert.equal(this.list.contains(-1), false);
            assert.equal(this.list.contains('javascript'), false);
        });
    });

    describe('items()', function() {
        beforeEach(function() {
            this.list = new LinkedList();
            for (var i = 1; i <= 5; i++) {
                this.list.add(i);
            }
        });

        it('should return an array of values in the list', function() {
            var items = this.list.items();
            assert(items instanceof Array);
            assert.deepEqual(items, [1, 2, 3, 4, 5]);
        });
    });
});


describe('Stack', function() {
    describe('push(value)', function() {
        beforeEach(function() {
            this.stack = new Stack();
        });

        it('should add the value to the end of the stack', function() {
            this.stack.push(1);
            assert.deepEqual(this.stack.items(), [1]);

            this.stack.push(2);
            assert.deepEqual(this.stack.items(), [1, 2]);

            this.stack.push(3);
            assert.deepEqual(this.stack.items(), [1, 2, 3]);
        });

        it('should increment the length of the stack', function() {
            this.stack.push(1);
            assert.equal(this.stack.length, 1);

            this.stack.push(2);
            assert.equal(this.stack.length, 2);

            this.stack.push(3);
            assert.equal(this.stack.length, 3);
        });
    });

    describe('pop()', function() {
        beforeEach(function() {
            this.stack = new Stack();
            for (var i = 1; i <= 3; i++) {
                this.stack.push(i);
            }
        });

        it('should remove the value at the top of the stack', function() {
            this.stack.pop();
            assert.deepEqual(this.stack.items(), [1, 2]);

            this.stack.pop();
            assert.deepEqual(this.stack.items(), [1]);

            this.stack.pop();
            assert.deepEqual(this.stack.items(), []);

            this.stack.pop();
            assert.deepEqual(this.stack.items(), []);
        });

        it('should return the removed value, or null if none', function() {
            assert.equal(this.stack.pop(), 3);
            assert.equal(this.stack.pop(), 2);
            assert.equal(this.stack.pop(), 1);
            assert.equal(this.stack.pop(), null);
        });

        it('should decrement the length of the stack', function() {
            this.stack.pop();
            assert.equal(this.stack.length, 2);

            this.stack.pop();
            assert.equal(this.stack.length, 1);

            this.stack.pop();
            assert.equal(this.stack.length, 0);
        });
    });

    describe('peek()', function() {
        beforeEach(function() {
            this.stack = new Stack();
            for (var i = 1; i <= 3; i++) {
                this.stack.push(i);
            }
        });

        it('should return the value at the top of the stack', function() {
            assert.equal(this.stack.peek(), 3);
            assert.equal(this.stack.peek(), 3);
            assert.equal(this.stack.peek(), 3);
        });

        it('should not remove any value from the stack', function() {
            this.stack.peek();
            assert.deepEqual(this.stack.items(), [1, 2, 3]);

            this.stack.peek();
            assert.deepEqual(this.stack.items(), [1, 2, 3]);

            this.stack.peek();
            assert.deepEqual(this.stack.items(), [1, 2, 3]);
        });

        it('should not modify the length of the stack', function() {
            this.stack.peek();
            assert.equal(this.stack.length, 3);

            this.stack.peek();
            assert.equal(this.stack.length, 3);

            this.stack.peek();
            assert.equal(this.stack.length, 3);
        });
    });

    describe('items()', function() {
        beforeEach(function() {
            this.stack = new Stack();
            for (var i = 1; i <= 5; i++) {
                this.stack.push(i);
            }
        });

        it('should return an array of values in the stack', function() {
            var items = this.stack.items();
            assert(items instanceof Array);
            assert.deepEqual(items, [1, 2, 3, 4, 5]);
        });
    });
});
