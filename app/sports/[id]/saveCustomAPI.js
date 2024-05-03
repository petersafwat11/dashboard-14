import axios from "axios";

export const saveCustomAPI = async (pathname, data, endpoint) => {
  let request;
  if (!pathname.endsWith("create")) {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${pathname.split("/")[3]}
        `,
      { customAPIData: data }
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
  `,
      { customAPIData: data }
    );
  }
  try {
    const dataSent = await request;
    return dataSent;
  } catch (error) {
    console.log("err", error);
  }
};
