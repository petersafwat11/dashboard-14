import axios from "axios";

export const saveMatchPoll = async (pathname, data, endpoint) => {
  let request;
  if (!pathname.endsWith("create")) {
    request = axios.patch(
      `${process.env.BACKEND_SERVER}/${endpoint}}
        `,
      data
    );
  } else {
    request = axios.post(
      `${process.env.BACKEND_SERVER}/${endpoint}
  `,
      data
    );
  }
  try {
    const dataSent = await request;
    return dataSent;
  } catch (error) {
    console.log("err", error);
  }
};
