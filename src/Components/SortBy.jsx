import React, { useContext } from "react";
import GlobalState from "../Context/globalState";

const SortBy = () => {
  const { value5, value6 } = useContext(GlobalState);
  const [url, setUrl] = value6;
  const setPageCount = value5[1];

  function setSortBy(criteria) {
    var p = "popularity.desc";
    var q = "vote_average.desc";
    var r = "release_date.desc";
    var s = "revenue.desc";
    var temp = "";
    if (url.indexOf(p) !== -1) {
      temp = url.replace(p, criteria);
    }
    else if (url.indexOf(q) !== -1) {
      temp = url.replace(q, criteria);
    }
    else if (url.indexOf(r) !== -1) {
      temp = url.replace(r, criteria);
    }
    else if (url.indexOf(s) !== -1) {
      temp = url.replace(s, criteria);
    }
    setUrl(temp);
    setPageCount(1);
  }

  function sortBy(e) {
    var category = document.getElementById("sort_categories").value;
    switch (category) {
      case "1":
        category = "popularity.desc";
        break;
      case "2":
        category = "vote_average.desc";
        break;
      case "3":
        category = "release_date.desc";
        break;
      case "4":
        category = "revenue.desc";
        break;
      default:
        category = "popularity.desc";
        break;
    }
    setSortBy(category);
  }

  return (
    <div className="text-xl pt-6 focus:outline-none rounded">
      <div>
        <select
          name="sort_categories"
          id="sort_categories"
          defaultValue="1"
          onChange={sortBy}
        >
          <option value="1">Popularity</option>
          <option value="2">Avg. Rating</option>
          <option value="3">Release Date</option>
          <option value="4">Revenue</option>
        </select>
      </div>
    </div>
  );
};

export default SortBy;
