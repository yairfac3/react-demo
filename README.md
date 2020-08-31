# react-event-emitter-demo
Setup Project:
- npm install
- npm start

To run test cases:
- npm test

Description:
- Project contains mainly 4 components:
1) Main component is used to load all 3 monitoring components and to emit the data
2) All 3 monitoring component will receive emitted data and display them
3) If monitoring component will not receive data for 1000ms, it will display N/A as result.

- For Test cases:
1) Main.test.js file is used to call emitter events and to avoid infinite looping, worked with single event emit, that will be received by individual monitoring component will check for expected result.
2) Monitoring components have a test for initial state value and then for event emitted value.