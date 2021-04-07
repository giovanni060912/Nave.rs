import Image from "next/image";
import Button from "@material-ui/core/Button";
import DeleteIcon from "@material-ui/icons/Delete";
import CreateIcon from "@material-ui/icons/Create";

export default function Home() {
  return (
    <div
      class="Container"
      style={{
        display: "flex",
        width: "90%",
        height: "90%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Image src="/logo.png" width={236} height={60} />
        <Button
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "10%",
            backgroundColor: "ffffff",
            color: "#000000",
            marginRight: "50px",
          }}
        >
          Sair
        </Button>
      </div>
      <div
        style={{
          display: "flex",
          width: "100%",
          height: "100%",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <h1 style={{ fontSize: "60px" }}>Navers</h1>
        <Button
          variant="outlined"
          style={{
            display: "flex",
            width: "100%",
            maxWidth: "15%",
            marginBottom: "40px",
            backgroundColor: "#000000",
            color: "#ffffff",
            marginRight: "2%",
          }}
        >
          Adicionar Naver
        </Button>
      </div>
      <div
        className="images"
        style={{
          width: "100%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <Image src="/IMG1.png" width={236} height={260} />
          <h3 style={{ fontFamily: "Montserrat" }}>Juliano Reis</h3>
          <h4 style={{ fontFamily: "Montserrat" }}>Front-end Developer</h4>
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <CreateIcon />
          </Button>
        </div>
        <div>
          <Image src="/IMG2.png" width={236} height={260} />
          <h3 style={{ fontFamily: "Montserrat" }}>Gabriel do Couto</h3>
          <h4 style={{ fontFamily: "Montserrat" }}>Front-end Developer</h4>
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <CreateIcon />
          </Button>
        </div>
        <div>
          <Image src="/IMG3.png" width={236} height={260} />
          <h3 style={{ fontFamily: "Montserrat" }}>Eduardo Bittencourt</h3>
          <h4 style={{ fontFamily: "Montserrat" }}>Front-end Developer</h4>
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <CreateIcon />
          </Button>
        </div>
        <div>
          <Image src="/IMG4.png" width={236} height={260} />
          <h3 style={{ fontFamily: "Montserrat" }}>Gustavo Pinho</h3>
          <h4 style={{ fontFamily: "Montserrat" }}>Technology Manager</h4>
          <Button>
            <DeleteIcon />
          </Button>
          <Button>
            <CreateIcon />
          </Button>
        </div>
      </div>
    </div>
  );
}
