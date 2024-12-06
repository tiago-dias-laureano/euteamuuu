import { MercadoPagoConfig, Preference } from "mercadopago";

import { initMercadoPago } from "@mercadopago/sdk-react";
initMercadoPago("APP_USR-75989405-a63a-4301-9bcf-4b9b08553b18");

const client = new MercadoPagoConfig({
  accessToken:
    "APP_USR-4512908093532576-120522-26b78ca4ba9f2cf123924e0914825bfe-442823712 ",
});

const preference = new Preference(client);

async function generatePreference() {
  const response = await preference.create({
    body: {
      items: [
        {
          id: "item-ID-1234",
          title: "Meu produto",
          currency_id: "BRL",

          description: "Descrição do Item",
          category_id: "art",
          quantity: 1,
          unit_price: 75.76,
        },
      ],
    },
  });

  return response;
}

export { generatePreference };
