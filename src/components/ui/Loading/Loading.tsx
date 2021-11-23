import React from "react";
import Loader from "react-loader-spinner";
import styles from "./Loading.module.css";

const Loading: React.FC = () => {
    return (
        <div className={styles.main}>
            <Loader
                type="Puff"
                color="#00BFFF"
                height={100}
                width={100}
                timeout={3000}
            />
        </div>
    );
};

export default Loading;
