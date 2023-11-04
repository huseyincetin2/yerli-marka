import Head from "next/head";
import styles from "../styles/Home.module.css";
import Select, { components } from "react-select";
import source from "../utils/source";

const options = source.map((o) => ({
  label: o.text,
  value: o.text,
  logo: o.logo,
}));

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className={styles.brandLine}>
        <img src={props.data.logo} className={styles.brandLogo} />
        {props.children}
        <span className={styles.notNative}>🚫 Yerli değil</span>
      </div>
    </components.Option>
  );
};

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Marka yerli mi?</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <h1 className={styles.title}>Marka yerli mi?</h1>
        <div style={{ width: "100%" }}>
          <Select
            options={options}
            components={{ Option }}
            placeholder="Arama"
            noOptionsMessage={() => "Sonuç bulunamadı!"}
          />
        </div>
      </main>

      <footer>Tüm hakları açıktır.</footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
        }
      `}</style>

      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }
        * {
          box-sizing: border-box;
        }
      `}</style>
    </div>
  );
}
