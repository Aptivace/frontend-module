export async function $fetch(route, method = "GET", body = {}) {
  const url = new URL("https://vosbwumemxht.buymysite.ru/api-of" + route);
  let headers = {
    Authorization: `Bearer ${localStorage.getItem("token")}`,
  };
  console.log(body);

  if (method === "GET") {
    url.search = new URLSearchParams(body);
    body = null;
  }

  if (method === "PATCH") {
    headers = {
      ...headers,
      "Content-Type": "application/json",
    };
  }

  const res = await fetch(url, { headers, method, body });

  return error(res);
}

const error = (data) => {
  if (data.status >= 200 && data.status < 500) {
    return data.json();
  } else {
    console.log("server-error");
  }
};
