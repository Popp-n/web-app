import { AxiosError } from "axios";
import { create } from "zustand";
import { devtools } from "zustand/middleware";
import { immer } from "zustand/middleware/immer";



interface ResponseProps {
  data: any;
  loading: boolean;
  error: AxiosError | null;
}

interface Props {
  data: null;
  loading: boolean;
  error: AxiosError | null;

  setResponse: (data: ResponseProps) => void;
}

const useApiStore = create<Props>()(
  // persist(
  immer(
    devtools((set) => ({
      data: null,
      loading: false,
      error: null,

      setResponse: (data: ResponseProps) => {
        set(data, false, "api_call");
      },
    }))
  )
  // )
);
export default useApiStore;
