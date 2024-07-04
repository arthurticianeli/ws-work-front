import {
  Dispatch,
  SetStateAction,
  useCallback,
  useEffect,
  useState,
} from "react";

interface IUseFetchOptions<T> {
  data: T;
  errorMessage: string;
  setErrorMessage: Dispatch<SetStateAction<string>>;
  executePromise: <response>(
    promiseCallback: () => Promise<response>,
    onSuccessCallback?: (resp: response) => void,
    onErrorCallback?: (error: any) => void
  ) => Promise<response>;
}

type ValueType<T> = T extends Promise<infer U> ? U : T;

export function useFetchUseCase<P extends any[]>(
  promisesFactory?: () => Promise<ValueType<P[number]>>[]
): IUseFetchOptions<P> {
  const [data, setData] = useState<P>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState("");

  const executePromise = useCallback(
    async <response,>(
      promiseCallback: () => Promise<response>,
      onSuccessCallback?: (resp: response) => void,
      onErrorCallback?: (error: any) => void
    ): Promise<response> => {
      try {
        const response = await promiseCallback();
        if (onSuccessCallback) onSuccessCallback(response);
        return response;
      } catch (error: any) {
        setErrorMessage(
          `Erro ${error.code} - ${error?.response?.data?.message}`
        );
        if (onErrorCallback) onErrorCallback(error);
      } finally {
        setLoading(false);
      }
    },
    []
  );

  useEffect(() => {
    if (!promisesFactory) return;
    setLoading(true);
    Promise.all(promisesFactory())
      .then((response) => {
        setData(response as P);
      })
      .catch((error: any) => {
        setErrorMessage(error?.message);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return {
    data,
    errorMessage,
    setErrorMessage,
    executePromise,
  };
}
