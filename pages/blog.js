import { useState, useEffect } from "react";
import { DataStore } from "@aws-amplify/datastore";
import { Author } from "../src/models";
import Amplify, { API, graphqlOperation } from "aws-amplify";
import config from "../src/aws-exports";
import { listAuthors } from "../src/graphql/queries";

Amplify.configure(config);

const Blog = () => {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      const authors = await API.graphql(graphqlOperation(listAuthors));
      console.log(authors);
      setData(authors);
    };
    fetchData();
  }, []);

  return (
    <>
      <div>Blog... Hello</div>
      <ul>
        {data &&
          data.data.listAuthors.items.map((item) => (
            <li key={item.id}>
              {item.name}{" "}{item.gender}
              <ul>
                {item.blogs.items.map((blogItem) => (
                  <li>{blogItem.title}</li>
                ))}
              </ul>
            </li>
          ))}
      </ul>
    </>
  );
};

export default Blog;
