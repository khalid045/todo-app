import "./todo.css";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { Delete, Close, Done } from "@mui/icons-material";

export const Todo = ({ itemData, deleteIT, status2 }) => {
  return (
    <div className="todocont">
      <div className={`${itemData.complete ? "items2" : "items"}`}>
        <div className="itemTitle">
          {itemData.complete ? (
            <Done
              className="itemTitleIcon"
              onClick={() => status2(itemData.id)}
            />
          ) : (
            <Close
              className="itemTitleIcon"
              onClick={() => status2(itemData.id)}
            />
          )}
          <p>{itemData.text}</p>
        </div>
        <div className="itemIcon">
          <div className="itemIconEditNote"></div>
          <div className="itemIconDelete">
            <Delete onClick={() => deleteIT(itemData.id)} />
          </div>
        </div>
      </div>
    </div>
  );
};
