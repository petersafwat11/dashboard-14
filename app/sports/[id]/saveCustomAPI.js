import axios from "axios";

export const saveCustomAPI = async (pathname, data, endpoint, id) => {
  let request;
  if (!pathname.endsWith("create")) {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}/${id}
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
    console.log(dataSent)
    return dataSent;
  } catch (error) {
    console.log("err", error);
  }
};
