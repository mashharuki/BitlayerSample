# BitlayerSample
BitLayer調査・学習用のリポジトリです。


## 動かし方

`backend`ディレクトリ配下で実行してください。

- 環境変数の設定

  `.env`ファイルを作成し、以下の値をセットすること

  ```txt
  PRIVATE_KEY=
  ```

- インストール

  ```bash
  yarn
  ```

- セットアップ

  ```bash
  yarn setUp --network bitLayerTestnet
  ```

- コンパイル

  ```bash
  yarn compile
  ```

- テスト

  ```bash
  yarn test
  ```

- デプロイ

  ```bash
  yarn deploy --network bitLayerTestnet
  ```

  実際にデプロイしたコントラクト

  [0xAa363921A48Eac63F802C57658CdEde768B3DAe1](https://testnet-scan.bitlayer.org/address/0xaa363921a48eac63f802c57658cdede768b3dae1?tab=Transactions)

- 試しにコントラクトの機能を呼び出す方法

  ```bash
  yarn getOwner --network bitLayerTestnet
  ```

  ```bash
    ========================================== [START] ==========================================
    owner address: 0x51908F598A5e0d8F1A3bAbFa6DF76F9704daD072
    ========================================== [END] ==========================================
    Done in 1.75s.
  ```


### 参考文献

1. [BitLayer - QuickStart](https://docs.bitlayer.org/docs/Build/GettingStarted/QuickStart/)
2. [BitLayerScan - Testnet](https://testnet-scan.bitlayer.org/)
