"use client";

import { initMercadoPago } from "@mercadopago/sdk-react";
import { useEffect, useState } from "react";
import { generatePreference } from "@/app/mercadopago";
initMercadoPago("APP_USR-75989405-a63a-4301-9bcf-4b9b08553b18");

interface IResponseMP {
  id: string;
  init_point: string;
}

export default function Payments() {
  const [preferenceId, setPreferenceId] = useState<IResponseMP>({
    id: "",
    init_point: "",
  });
  useEffect(() => {
    async function generatePreferenceId() {
      const response = await generatePreference();
      setPreferenceId({
        id: response.id as string,
        init_point: response.init_point as string,
      });
    }
    generatePreferenceId();
  }, []);

  https: return (
    <>
      {/* {preferenceId && (
        <Wallet
          initialization={{
            redirectMode: "blank",
            preferenceId: preferenceId.id,
          }}
        />
      )} */}

      <a href={preferenceId.init_point}>TIAGO MACACO</a>
    </>
  );
}
