import Head from "next/head";
import styles from "../styles/Home.module.css";
import Select, { components } from "react-select";
import source from "../utils/source";

const total = source.length;
const options = source
  .sort((a, b) => {
    if (a.text > b.text) return 1;
    if (a.text < b.text) return -1;
    return 0;
  })
  .map((o) => ({
    label: o.text,
    value: o.text,
    logo: o.logo,
    isNative: o.isNative,
  }));

const Option = (props) => {
  return (
    <components.Option {...props}>
      <div className={styles.brandLine}>
        <img src={props.data.logo} className={styles.brandLogo} />
        {props.children}
        {props.data.isNative ? (
          <span className={styles.itsNative}>✅ Yerli marka</span>
        ) : (
          <span className={styles.notNative}>🚫 Yerli değil</span>
        )}
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
        <Select
          className={styles.searchBox}
          options={options}
          components={{ Option }}
          placeholder="Arama"
          noOptionsMessage={() => "Sonuç bulunamadı!"}
        />
        <p className={styles.paragraph}>
          Toplam <b>{total}</b> marka incelendi ve hızla yenileri incelenmeye ve
          eklenmeye devam ediyor.
        </p>
      </main>

      <footer>
        <div>Son güncelleme:</div>
        <div>
          <b>05.11.2023 10:11</b>
        </div>
      </footer>

      <style jsx>{`
        main {
          padding: 5rem 0;
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: top;
          align-items: center;
        }
        footer {
          width: 100%;
          height: 100px;
          color: #555;
          border-top: 1px solid #eaeaea;
          display: flex;
          flex-direction: column;
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
