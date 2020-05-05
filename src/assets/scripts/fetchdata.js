async function authLogin() {
  const secretKey = process.env.REACT_APP_SECRET_KEY;
  const randomKey = process.env.REACT_APP_RANDOM_KEY;
  const appId = process.env.REACT_APP_APPLICATION_ID;
  const finalKey = `${randomKey}:${secretKey}`;
  const authToken = window.btoa(finalKey);
  const headers = {
    "Content-Type": "application/json",
    "X-Api-Factory-Application-Id": appId,
    Authorization: "Basic " + authToken,
  };
  const body = {
    username: "intern",
    password: "intern-S!",
  };
  // let bearer = {};

  const login = await fetch(
    "http://api-factory.simbirsoft1.com/api/auth/login",
    {
      method: "POST",
      headers: headers,
      body: JSON.stringify(body),
    }
  );

  const bearer = await login.json();

  return bearer;
}

export async function fetchData(table) {
  const appId = process.env.REACT_APP_APPLICATION_ID;
  const bearer = authLogin();
  const headersBearer = {
    "Content-Type": "application/json",
    "X-Api-Factory-Application-Id": appId,
    Authorization: `Bearer ${bearer.access_token}`,
  };

  const response = await fetch(
    `http://api-factory.simbirsoft1.com/api/db/${table}`,
    {
      method: "GET",
      headers: headersBearer,
    }
  );

  const json = await response.json();

  return json.data;
}
