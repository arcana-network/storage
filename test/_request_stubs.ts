
import { rest } from 'msw';

exports.init = function (moxios: any) {

    moxios.stubRequest(/[A-Za-z0-9]*get-config[A-Za-z0-9]*/g, {
        status: 200,
        response: {
            "Factory": "0xC392ACbF071750876DF339D26dA542EbE5738646",
            "Forwarder": "0x90e29b3662E63bC46510aca861167072A48D7318",
            "RPC_URL": "https://this.is.test.chain.url/"
        }
    })

    moxios.stubRequest(/[A-Za-z0-9]*get-nonce\/\?address[A-Za-z0-9=]*/g, {
        status: 200,
        response: {
            data: 0
        }
    })

    moxios.stubRequest(/[A-Za-z0-9]*api\/list-files\/[A-Za-z0-9=]*/g, {
        status: 200,
        response: []
    })

    moxios.stubRequest(/[A-Za-z0-9]*login\//g, {
        status: 200,
        response: {
            data: {
                token: "123456789"
            }
        }
    });

    moxios.stubRequest(/[A-Za-z0-9]*\/get-address\//g, {
        status: 200,
        response: {
            data: {
                address: "0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158"
            }
        }
    });

    moxios.stubRequest(/[A-Za-z0-9]*\/shared-files\//g, {
        status: 200,
        data: []
    });




}



export const handlers = [
  // gateway calls
  rest.get("https://gateway02.arcana.network/get-config/", (req, res, ctx) => {

    return res(
        ctx.json({
            "Factory": "0xC392ACbF071750876DF339D26dA542EbE5738646",
            "Forwarder": "0x90e29b3662E63bC46510aca861167072A48D7318",
            "RPC_URL": "https://blockchain-dev.arcana.network"
        }),
      )

  }),
  rest.get("https://gateway02.arcana.network/api/list-files/", (req:any, res, ctx) => {

    return res(
        ctx.json([])
      )

  }),
  rest.get("https://gateway02.arcana.network/api/shared-files/", (req:any, res, ctx) => {

    return res(
        ctx.json([])
      )

  }),
  rest.get("https://gateway02.arcana.network/get-nonce/", (req, res, ctx) => {

    return res(
        ctx.text("0")
      )

  }),
 
  rest.post("https://gateway02.arcana.network/login/", (req, res, ctx) => {

    return res(
        ctx.json({ 
            token: "123456789"
        })
    );

  }),
  rest.get("https://gateway02.arcana.network/api/get-address/", (req, res, ctx) => {

    return res(
        ctx.json({ host: 'https://localhost:3000/', address: '0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158' })
    );

  }),
  rest.get("https://gateway02.arcana.network/get-address/", (req, res, ctx) => {

    return res(
        ctx.json({ address: "0x98f92D5B2Eb666f993c5930624C2a73a3ED5B158"})
    );

  })

]


