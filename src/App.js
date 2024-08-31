import React, { useState } from "react";

function App() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        paddingTop: 20,
      }}
    >
      <ValidatedForm />
    </div>
  );
}

const ValidatedForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [accounts, setAccounts] = useState([
    { username: "NamıkKorona1", password: "1234567" },
  ]);

  const onSubmit = (e) => {
    e.preventDefault();
    if (typeof window !== "undefined") {
      if (password.length < 6 || username.length < 6) {
        window.alert("Kullanıcı adı ve şifre 6 karakterden az olamaz");
        return;
      } else if (password.length > 20 || username.length > 20) {
        window.alert("Kullanıcı adı veya şifre 20 karakterden fazla olamaz");
        return;
      }

      const account = accounts.find((account) => account.username === username);
      if (account) {
        account.password === password
          ? window.alert(`Login başarılı, selam ${username}`)
          : window.alert(`Hatalı şifre ${username}`);
        setPassword("");
        setUsername("");
      } else {
        setAccounts((prev) => [...prev, { username, password }]);
        window.alert(`Yeni hesap oluşturuldu, merhaba ${username}`);
        setPassword("");
        setUsername("");
      }
    }
  };

  return (
    <form
      style={{
        display: "flex",
        flexDirection: "column",
        border: "solid",
        padding: 10,
      }}
      onSubmit={onSubmit}
    >
      <h3>Login</h3>
      <input
        className="border-[1px] border-black pl-1 rounded-md"
        value={username}
        type="text"
        onChange={(e) => setUsername(e.target.value)}
        style={{ marginBottom: 5 }}
        placeholder="Username"
      />
      <input
        className="border-[1px] border-black pl-1 rounded-md"
        value={password}
        type="text"
        onChange={(e) => setPassword(e.target.value)}
        style={{ marginBottom: 10 }}
        placeholder="Password"
      />
      <button
        style={{ alignSelf: "center" }}
        onClick={onSubmit}
        className="border-[1px] border-black px-2 py-1 rounded-md bg-amber-300/60 hover:bg-amber-200/60"
      >
        Submit
      </button>
    </form>
  );
};

export default App;
