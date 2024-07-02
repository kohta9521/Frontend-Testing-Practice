it("初めてのmock", () => {
  // jest.fn()
  const mockFunc = jest.fn(() => "Hello mock");
  expect(mockFunc()).toBe("Hello mock");
});
