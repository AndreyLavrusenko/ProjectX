import React from "react";
import CoinIcon from "../../../../shared/assets/icons/CoinIcon";
import { Text, TextType } from "../../../../shared/ui/Text/Text";

import styles from "./CoinHeader.module.scss"

const CoinsHeader = () => {
    return (
        <div className={styles.CoinHeader}>
            <CoinIcon/>
            <Text type={TextType.DefaultText}>
                200
            </Text>
        </div>
    );
};

export default CoinsHeader;