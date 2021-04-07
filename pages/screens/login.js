import Image from "next/image";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  textField: {
    marginLeft: theme.spacing(10),
    marginRight: theme.spacing(10),
    width: "55ch",
  },
}));

export default function Login() {
  const [email, setEmail] = React.useState("");
  const classes = useStyles();
  return (
    <div
      class="Container"
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        class="Box"
        style={{
          display: "flex",
          width: "100%",
          maxWidth: "500px",
          marginTop: "20ch",
          marginLeft: "1ch",
          marginRight: "1ch",
          flexDirection: "column",
          borderStyle: "solid",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "flex",
            marginTop: "40px",
          }}
        >
          <Image src="/logo.png" width={236} height={60} />
        </div>
        <form
          onSubmit={function (event) {
            event.preventDefault();
            console.log(" Fazendo uma submissão por meio do react".event);
            console.log("value".value);
          }}
        >
          <TextField
            required
            className={classes.textField}
            id="E-mail"
            onChange={(event) => setEmail(event.target.value)}
            style={{
              marginTop: "60px",
              width: "100%",
              maxWidth: "100%",
            }}
            label="E-mail"
            variant="outlined"
          />

          <TextField
            required
            className={classes.textField}
            id="password"
            style={{
              marginTop: "60px",
              marginBottom: "60px",
              width: "100%",
              maxWidth: "100%",
            }}
            label="Senha"
            variant="outlined"
          />
          <Button
            variant="outlined"
            style={{
              display: "flex",
              width: "100%",
              maxWidth: "100%",
              marginBottom: "40px",
              backgroundColor: "#000000",
              color: "#ffffff",
            }}
          >
            Entrar
          </Button>
        </form>
      </div>
    </div>
  );
}
