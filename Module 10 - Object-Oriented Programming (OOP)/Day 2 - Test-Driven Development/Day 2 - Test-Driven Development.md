# Test-Driven Development
- describe("Constructor Function", () => {
- it
- expect
- })
- npm run test.
- You need to install jest.
- What is this?
- With this method, you can start with the test, then code.
- When testing, there’s a set up, calling, and check.
- Jest offers a .spyOn() function.
- There’s probably a good tutorial for learning Jest and incorporating tests.
- If you’re testing console.log, you can use mockImplementation().
- it.only is to run just one test. Could it also be test.only.
- mock.mockImplementation( () => {} ).
- The above does nothing!
- jest.spyOn()
- We skipped First-Mock and Mock-Fs.06
- There’s also a mockRestore() to undo mockImplementation().
- There’s also an afterEach() you can use to run something after every test.
- It would be good to learn mock, in case there’s an API I don’t want to actually call while testing (for example).