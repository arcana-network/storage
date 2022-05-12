<br/>

<h1 align="center"><img src="./images/arcana_logo.png" height="24px"> </h1>

<h3 align="center">

[Arcana Network](https://arcana.network/) Storage SDK

<br/>

<div align="center"><img src="./images/arcana_storage.png"  width="100%"/></div>

# 💪 Key Features

<p>🗄️ &nbsp; Save dApp user data in Arcana data store</p>
<p>🧩 &nbsp; Encrypt / Decrypt File data and metadata</p>
<p>📂 &nbsp; Share data with other dApp users</p>
<p>🔒 &nbsp; Revoke access to shared data</p>
<p>🖼️ &nbsp; Change data ownership</p>
<p>📈 &nbsp; Track data accesses via public blockchain browsers</p>

# 🏗️ Installation

## npm

```shell
npm i @arcana/storage
```

## yarn

```shell
yarn add @arcana/storage
```

You can use the standalone module which includes the polyfills.

```html
<script src="./dist/standalone/storage.umd.js"></script>
```

```js
import { StorageProvider } from '@arcana/storage/dist/standalone/storage.umd';
```

# 📋 Prerequisites

Before you can start using the Arcana Storage SDK, you need to register your dApp using [Arcana Developer Dashboard](https://dashboard.arcana.network/).

A unique **AppId** will be assigned to your dApp and you need to provide this to Arcana Storage SDK in order to use the SDK functionality.

# 📚 Documentation

Check out [Arcana Network documentation](https://docs.arcana.network/) for [Storage SDK Quick Start Guide](https://docs.arcana.network/stgsdk_qs), [Usage Guide](https://docs.arcana.network/stgsdk_usage) and [API reference Guide](https://docs.arcana.network/stg_ref).

Refer to the [sample app code](https://docs.arcana.network/demo-app) or the [How To Guides](https://docs.arcana.network/config_dapp) for performing specific tasks such as uploading/downloading a file, sharing file or revoking access to a file, and change file ownership.

# 💡 Support

For any support or integration related queries, contact [Arcana support team](mailto:https://support@newfang.io).

# 🤝 Contributing

We appreciate your feedback and contribution to Arcana Storage component. Open a GitHub issue and discuss your RFP with Arcana Network developers. We plan to come up with a detailed contributing guide soon. Stay tuned!

# ℹ️ License

Arcana Storage is distributed under the [Uniswap Business Source License 1.1](https://github.com/Uniswap/v3-core/blob/main/LICENSE).

For details see [Arcana License](https://github.com/arcana-network/license/blob/main/LICENSE.md).
