import { useEffect, useState } from "react";
import { ListItem } from "./components/Listitem";
import axios from "axios";
import type { User } from "./types/user";

export const App = () => {
  // 取得したユーザー情報
  const [users, setUsers] = useState<User[]>([]);

  // 画面表示時にユーザー情報取得
  useEffect(() => {
      // ローカルにあるjsonファイルを読み込む時はpublicに配置する
    axios.get<User[]>("./sample.json").then((res) => {
      setUsers(res.data);
    });
  }, []);

  return (
    <div>
      {users.map((user) => (
        <ListItem
          id={user.id}
          name={user.name}
          age={user.age}
          personalColor={user.personalColor}
        />
      ))}
    </div>
  );
};
