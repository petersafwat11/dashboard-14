import classes from "./sportCategory.module.css";
const SportCategory = ({ data, dispatchDetail }) => {
  const categories = [
    "Football",
    "Basketball",
    "NFL",
    "Fights",
    "Netball",
    "Volleyball",
    "Tennis",
    "WWE",
    "F1",
    "Baseball",
    "Handball",
    "Nascar",
    "Darts",
    "Cricket",
    "Hockey",
    "HorseRacing",
    "Rugby",
    "Tabletennis",
    "UFC",
  ];
  console.log(data);
  return (
    <div className={classes["sport-category"]}>
      <h2 className={classes["title"]}>Sport Category</h2>
      <div className={classes["categories"]}>
        {categories.map((item, index) => (
          <div
            onClick={() => {
              dispatchDetail({
                type: "SPORT-CATEGORY",
                value: item.toLocaleLowerCase(),
              });
            }}
            key={index}
            className={classes["category"]}
          >
            <p>{item}</p>
            <span
              className={
                classes[
                  data == item.toLocaleLowerCase() ? "checked" : "not-checked"
                ]
              }
            ></span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportCategory;
