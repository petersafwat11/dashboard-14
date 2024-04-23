import axios from "axios";
import Cookies from "js-cookie";

export const getData = async (id, dispatchDetail, endpoint) => {
  try {
    const response = await axios.get(
      `${process.env.BACKEND_SERVER}/${endpoint}/${id}
        `,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
    console.log("response", response);
    dispatchDetail({ type: "UPDATE-ALL", value: response.data.data.data });
  } catch (error) {
    dispatchDetail({ type: "NOT-FOUND", value: error.response.data.message });
    console.log("error", error);
  }
};
export const deleteItem = async (pathname, router, endpoint) => {
  if (!pathname.endsWith("create")) {
    try {
      const response = await axios.delete(
        `${process.env.BACKEND_SERVER}/${endpoint}/${pathname.split("/")[3]}
        `,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      );
      console.log("success", response);
      router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
    } catch (error) {
      console.log("err", error);
    }
  } else {
    router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
  }
};
export const saveItem = async (
  pathname,
  data,
  dispatchDetail,
  router,
  endpoint,
) => {
  let request;
  if (!pathname.endsWith("create")) {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${pathname.split("/")[2]}
      `,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
`,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  }
  try {
    const dataSent = await request;
    dispatchDetail({ type: "CLEAR-ALL" });
    console.log(dataSent);
    router.push(`${pathname.slice(0, pathname.lastIndexOf("/"))}`);
  } catch (error) {
    console.log("err", error);
  }
};
export const saveServer = async (
  data,
  dispatchMainservers,
  dispatchOtherservers,
  router,
  endpoint,
  serversId,
  requestType
) => {
  let request;
  if (requestType === "PATCH") {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${serversId}
        `,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
  `,
      data,
      {
        headers: {
          Authorization: `Bearer ${Cookies.get("token")}`,
        },
      }
    );
  }
  try {
    const dataSent = await request;
    dispatchMainservers({ type: "CLEAR-ALL" });
    dispatchOtherservers({ type: "CLEAR-ALL" });
    console.dir(data);
    router.push(`/sports`);
  } catch (error) {
    console.log("err", error);
  }
};
