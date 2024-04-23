"use client";
import React, { useReducer } from "react";
import classes from "./wrapper.module.css";
import { usePathname, useRouter } from "next/navigation";
import { deleteItem, saveItem } from "@/app/lib/createPages";
import Title from "../title/Title";
import ActionsButtons from "@/app/ui/actionsButtons/ActionsButtons";
import ThumbnailImage from "../thumbnailImage/ThumbnailImage";
import Description from "../description/Description";
import NewsContent from "../newsContent/NewsContent";
import { intialValue, newsReducer } from "@/app/ui/reducers/newsReducer";
import revalidatePage from "@/app/lib/revalidateAction";
const Wrapper = ({ newsItemData }) => {
  const [news, dispatchDetail] = useReducer(
    newsReducer,
    newsItemData || intialValue
  );
  const pathname = usePathname();
  const router = useRouter();

  const saveChanges = () => {
    let data = news;
    const formData = new FormData();
    formData.append("title", data?.title);
    formData.append("description", data?.description);
    formData.append("coverImage", data?.coverFile);
    formData.append("numOfSubnews", data?.numOfSubnews);

    data?.subNews.forEach((subNew, index) => {
      formData.append(`subNews-${index + 1}-title`, subNew.title);
      formData.append(`subNews-${index + 1}-description`, subNew.description);
      formData.append(`subNews-${index + 1}-image`, subNew.file);
    });
    saveItem(pathname, formData, dispatchDetail, router, "news");
    revalidatePage("news");
  };
  const deleteNews = async () => {
    deleteItem(pathname, router, "news");
    revalidatePage("news");
  };

  return (
    <div>
      <div className={classes["actions"]}>
        <ActionsButtons
          firstButtonFunction={saveChanges}
          secondButtonFunction={deleteNews}
          first={"Save"}
          second={"Delete"}
        />
      </div>
      <p className={classes["label"]}>Listing ID: 2</p>

      <div className={classes["details"]}>
        <div className={classes["first"]}>
          <Title data={news.title} dispatchDetail={dispatchDetail} />
          <ThumbnailImage
            data={{ image: news.coverImage, file: news.coverFile }}
            dispatchDetail={dispatchDetail}
          />
        </div>
        <Description data={news.description} dispatchDetail={dispatchDetail} />
      </div>
      <NewsContent
        data={{
          title: news.title,
          subNews: news.subNews,
          numOfSubnews: news.numOfSubnews,
        }}
        dispatchDetail={dispatchDetail}
      />
    </div>
  );
};

export default Wrapper;
