it("mock関数に戻り値を設定する", () => {
  const mockFunc = jest.fn();
  mockFunc.mockReturnValue("Mock return value");
  expect(mockFunc()).toBe("Mock return value");
});

it("mock関数に非同期な戻り値を設定する", async () => {
  const mockFunc = jest.fn();
  mockFunc.mockResolvedValue("Mock return value");
  const result = await mockFunc();
  expect(result).toBe("Mock return value");
});
