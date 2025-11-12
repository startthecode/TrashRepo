export async function fetchAtServer(config: AxiosRequestConfig) {
  let cookieStore = await cookies();
  let accessToken =
    newAccessToken ||
    cookieStore.getAll().find((val) => val.name == "accessToken")?.value;
  try {
    const response = await axios({
      ...config,
      baseURL: environment.serverURL,
      withCredentials: true,
      headers: {
        ...config.headers,
        Authorization: `Bearer ${accessToken}`,
      },
      timeout: config.timeout || 10000,
    });
    return response.data;
  } catch (error: any) {
    if ([401].includes(error?.status)) {
      const refreshToken = cookieStore
        .getAll()
        .find((val) => val.name === "refreshToken")?.value;
      const response = await fetch(
        `${environment.serverURL}api/Authentication/RefreshToke"`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            refreshToken: newrefreshToken || refreshToken,
            token: accessToken,
          }),
        }
      );
      const data = await response.json();
      console.log(data);
      newAccessToken = data.data.accessToken;
      newrefreshToken = data.data.refreshToken;
      console.log(newAccessToken, newrefreshToken);
      return fetchAtServer(config);
    } else {
      Promise.reject(error);
    }
  }
}
