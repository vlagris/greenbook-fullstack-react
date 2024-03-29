import Card from "../../../components/Card";
import {Book} from "@/types.ts";
import Pagination from "@components/Pagination";
import classes from "./../styles.module.scss";


interface ProductListProps {
  books: Book[],
  totalPages: number,
}

function ProductList({books, totalPages}: ProductListProps) {

  return (
    <div className={classes.product_list_wrap}>
      <div className={classes.product_list}>
        {books.map((book) =>
          <Card key={book.id} book={book}/>
        )}
      </div>

      <div className={classes.pagination_wrap}>
        <Pagination totalPages={totalPages}/>
      </div>
    </div>
  );
}

export default ProductList;