export const createAsyncSnapshot = (data: any, error: any) => {
    const hasData = Boolean(data);
    const hasError = Boolean(error);

    return {
      data,
      error,
      hasData,
      hasError,
    };
  };