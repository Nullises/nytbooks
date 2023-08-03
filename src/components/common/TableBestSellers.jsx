const TableBestSellers = (props) => {
  function getImgUrl(name) {
    return new URL(`${name}`, import.meta.url).href;
  }
  return (
    <>
      <table className="table table-zebra mt-10 mb-10">
        {/* head */}
        <thead>
          <tr>
            <th>Rank</th>
            <th>Title</th>
            <th>Description</th>
            <th>Author</th>
            <th>Contributor</th>
            <th>Publisher</th>
            <th>Image</th>
            <th>Where to buy?</th>
          </tr>
        </thead>
        <tbody>
          {props.books.map((item, key) => {
            return (
              <tr key={key}>
                <th>{item.rank}</th>
                <td>{item.title}</td>
                <td>{item.description}</td>
                <td>{item.author}</td>
                <td>{item.contributor}</td>
                <td>{item.publisher}</td>
                <td>
                  <img
                    src={getImgUrl(item.book_image)}
                    height={item.book_image_height}
                    width={item.book_image_width}
                    alt={item.title}
                  />
                </td>
                <td>
                  {item.buy_links.map((item, key) => {
                    return (
                      <div key={key}>
                        <a
                          className="underline"
                          href={item.url}
                          target="_blank"
                          rel="noreferrer"
                        >
                          {item.name}
                        </a>
                      </div>
                    );
                  })}
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableBestSellers;
