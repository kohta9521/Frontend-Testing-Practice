it("mock関数が呼び出されることを確認する", () => {
  const mockFunc = jest.fn();
  mockFunc();
  expect(mockFunc).toHaveBeenCalled();
});

it("mock関数が2回呼び出されることを確認する", () => {
  const mockFunc = jest.fn();
  mockFunc();
  mockFunc();
  expect(mockFunc).toHaveBeenCalledTimes(2);
});

it("mock関数が指定された引数で実行されたかどうかを確認する", () => {
  const mockFunc = jest.fn();
  mockFunc("hoge");
  expect(mockFunc).toHaveBeenCalledWith("hoge");
});
