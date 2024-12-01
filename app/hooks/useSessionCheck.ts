import { useEffect } from "react";
import { useRouter } from "next/navigation";
import supabase from "../supabase";

const useSessionCheck = () => {
  const router = useRouter();

  useEffect(() => {
    const checkSession = async () => {
      const {
        data: { session },
      } = await supabase.auth.getSession();
      if (session) {
        router.push("/dashboard");
      }
    };
    checkSession();
  }, [router]);

  return;
};

export default useSessionCheck;
