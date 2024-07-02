import { ShoppingList } from "./practice";

describe("ShoppingListクラスとのテスト", () => {
  let shoppingList: ShoppingList;

  beforeEach(() => {
    shoppingList = new ShoppingList();
  });

  describe("addItemメソッドのテスト", () => {
    it("アイテムをリストに追加する", () => {
      shoppingList.addItem("item1");
      expect(shoppingList.list).toEqual(["item1"]);
    });
  });

  describe("removeItemメソッドのテスト", () => {
    it("アイテムをリストから削除する", () => {
      shoppingList.addItem("apple");
      shoppingList.removeItem("apple");
      expect(shoppingList.list).toEqual([]);
    });
    it("存在しないアイテムの削除を試みたときにエラーをスローすることを確認するテストケース", () => {
      expect(() => {
        shoppingList.removeItem("banana");
      }).toThrow("アイテム: banana は存在しません");
    });
  });
});
