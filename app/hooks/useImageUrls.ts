"use client";
import { useState, useEffect } from "react";
import supabase from "../supabase";

export const useImageUrls = (bucket: string) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase.storage.from(bucket).list();
        if (error) throw new Error("Erro ao listar arquivos");

        const urls = await Promise.all(
          data.map(async (file) => {
            const { data: response, error: urlError } = await supabase.storage
              .from(bucket)
              .createSignedUrl(file.name, 3000);
            if (urlError) throw new Error("Erro ao gerar URL assinada");
            return response.signedUrl;
          })
        );

        setImageUrls(urls);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchImages();
  }, [bucket]);

  return { imageUrls, isLoading };
};
