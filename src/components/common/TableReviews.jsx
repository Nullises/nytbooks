const TableReviews = (props) => {
  return (
    <>
      <table className="table table-zebra mt-10 mb-10">
        <thead>
          <tr>
            <th>Book Title</th>
            <th>Book Author</th>
            <th>ISBN</th>
            <th>Reviewer</th>
            <th>Publication Date</th>
            <th>Summary</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          {props.reviews.map((item, key) => {
            return (
              <tr key={key}>
                <th>{item.book_title}</th>
                <td>{item.book_author}</td>
                <td>{item.isbn13 ? item.isbn13[0] : ""}</td>
                <td>{item.byline}</td>
                <td>{item.publication_dt}</td>
                <td>{item.summary}</td>
                <td>
                  <a
                    className="underline"
                    href={item.url}
                    target="_blank"
                    rel="noreferrer"
                  >
                    {item.url}
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TableReviews;
