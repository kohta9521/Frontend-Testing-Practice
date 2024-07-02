import axios from "axios";
import Users from "./practice";

jest.mock("axios");
const mockedAxios = jest.mocked(axios);

describe("Users", () => {
  beforeEach(() => {
    mockedAxios.get.mockClear();
  });

  it("ユーザーを取得できるかのテスト", async () => {
    const users = [{ name: "taro" }, { name: "Hanako" }];
    const resp = { data: users };
    mockedAxios.get.mockResolvedValue(resp);

    const result = await Users.all();
    expect(result).toEqual(users);
    expect(mockedAxios.get).toHaveBeenCalledTimes(1);
  });
});
