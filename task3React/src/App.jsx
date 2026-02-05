import { useEffect, useState } from "react";


function App() {
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    fetch("https://randomuser.me/api/")
      .then((response) => response.json()).then((data) => {
        setUserData(data.results[0]);
      }).catch((error) => {
        console.error("Um erro aconteceu ao buscar dados na api ", error)
        setUserData(111);
      })

  }, []);


  if (userData === null) {
    return (
      <>
        <p>Carregando.....</p>
      </>
    )
  }

  if (userData === 111) {
    return (
      <>
        <p>Erro 404</p>
      </>
    )
  }

  return (
    <>

      <div style={{ backgroundColor: "blueviolet", border: "1px solid #000000ff", borderRadius: "20%", padding: "16px", width: "250px", height: "300px", display: "flex", alignItems: "center", justifyContent: "center", flexDirection: "column" }}>
        <img
          src={userData.picture.large}
          alt="User"
          style={{ borderRadius: "50%" }}
        />

        <h2>
          {userData.name.first} {userData.name.last}
        </h2>

        <p>{userData.email}</p>
      </div>

    </>
  )
}

export default App
