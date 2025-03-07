/**
 * 任務：實作一個函式 `createObjectAccessor`，該函式接收一個物件，並回傳一個新的物件，該物件有兩個方法：get 和 set。
 * get 方法用於獲取原物件的屬性值，set 方法用於設定原物件的屬性值。
 *
 * 範例：
 * const obj = { name: 'John', age: 30 };
 * const accessor = createObjectAccessor(obj);
 * accessor.get('name') 應該回傳 'John'
 * accessor.set('age', 31);
 * accessor.get('age') 應該回傳 31
 *
 * @param obj - 一個物件
 * @returns - 回傳一個物件，該物件有 get 和 set 兩個方法
 */
export function createObjectAccessor<Object>(obj: Object) {
    function get <Key extends keyof Object>(key: Key): Object[Key] {
        return obj[key];
    };
    function set <Key extends keyof Object>(key: Key, value: Object[Key]) {
        obj[key] = value;
    };
    return { get, set };
}